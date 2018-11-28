export const hashRE = /#.*$/;
export const extRE = /\.(md|html)$/;
export const endingSlashRE = /\/$/;
export const outboundRE = /^(https?:|mailto:)/;

export function normalize (path) {
    return path.replace(hashRE, '').replace(extRE, '');
}//normalize()

export function getHash (path) {
    const match = path.match(hashRE);
    if (match) {
        return match[0];
    }
}//getHash()

export function isExternal (path) {
    return outboundRE.test(path);
}//isExternal()

export function isMailto (path) {
    return /^mailto:/.test(path);
}//isMailto()

export function ensureExt (path) {
    if (isExternal(path)) {
        return path;
    }
    const hashMatch = path.match(hashRE);
    const hash = hashMatch ? hashMatch[0] : '';
    const normalized = normalize(path);

    if (endingSlashRE.test(normalized)) {
        return path;
    }
    return normalized + '.html' + hash;
}//ensureExt()

export function isActive (route, path) {
    const routeHash = route.hash;
    const linkHash = getHash(path);

    if (linkHash && routeHash !== linkHash) {
        return false;
    }

    const routePath = normalize(route.path);
    const pagePath = normalize(path);
    if (endingSlashRE.test(routePath) || endingSlashRE.test(pagePath)) {
        return routePath === pagePath;
    } else {
        return routePath.indexOf(pagePath) === 0;
    }
}//isActive()

export function resolvePage (pages, rawPath, base) {
    if (base) {
        rawPath = resolvePath(rawPath, base);
    }

    const path = normalize(rawPath);

    for (let i = 0; i < pages.length; i++) { 
        if (normalize(pages[i].path) === path) {
            return Object.assign({}, pages[i], {
                type: 'page',
                path: ensureExt(rawPath),
            });
        }
    }

    console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`);
    return {};
}//resolvePage()

function resolvePath (relative, base, append) {
    const firstChar = relative.charAt(0);
    if (firstChar === '/') {
        return relative;
    }

    if (firstChar === '?' || firstChar === '#') {
        return base + relative;
    }

    const stack = base.split('/');

    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
        stack.pop();
    }

    // resolve relative path
    const segments = relative.replace(/^\//, '').split('/');
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (segment === '..') {
            stack.pop();
        } else if (segment !== '.') {
            stack.push(segment);
        }
    }

    // ensure leading slash
    if (stack[0] !== '') {
        stack.unshift('');
    }

    return stack.join('/');
}//resolvePath()

export function resolveSidebarItems (page, route, site, localePath) {
    const pageSidebarConfig = page.frontmatter.sidebar;
    const { pages, themeConfig } = site;

    if (pageSidebarConfig === 'auto') {
        return resolveHeaders(page);
    }

    let localeConfig = themeConfig;
    if (localePath && themeConfig.locales) {
        localeConfig = themeConfig.locales[localePath] || themeConfig;
    }

    const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar;
    if (!sidebarConfig) {
        return [];
    } else {
        const { base, config } = resolveMatchingConfig(route, sidebarConfig);
        if (config) {
            return config.map(item => resolveItem(item, pages, base));
        } else {
            return [];
        }
    }
}//resolveSidebarItems()

function resolveHeaders (page) {
    const headers = groupHeaders(page.headers || []);
    return [
        {
            children: headers.map(h => {
                return {
                    type: 'auto',
                    title: h.title,
                    basePath: page.path,
                    path: page.path + '#' + h.slug,
                    children: h.children || [],
                };
            }),
            collapsable: false,
            title: page.title,
            type: 'group',
        },
    ];
}//resolveHeaders()

export function groupHeaders (headers) {
    // group h3s under h2
    let _headers = headers.map(h => Object.assign({}, h));

    let _lastH2;
    _headers.forEach(h => {
        if (h.level === 2) {
            _lastH2 = h;
        } else if (_lastH2) {
            _lastH2.children = _lastH2.children || [];
            _lastH2.children.push(h);
        }
    });

    return _headers.filter(h => {
        return h.level === 2; 
    });
}//groupHeaders()

export function resolveNavLinkItem (linkItem) {
    return Object.assign(linkItem, {
        type: (linkItem.items && linkItem.items.length ? 'links' : 'link'),
    });
}//resolveNavLinkItem()

export function resolveMatchingConfig (route, config) {
    if (Array.isArray(config)) {
        return {
            base: '/',
            config: config,
        };
    }

    // Find best match
    let bestMatch;
    for (const current in config) {
        let normPath = ensureEndingSlash(route.path);
        let exactMatch = config[normPath];
        let hasPartialMatch = (normPath.indexOf(current) === 0);

        if (exactMatch) {
            bestMatch = normPath;
            break;
        } 
        
        if (hasPartialMatch) {
            if (!bestMatch) {
                bestMatch = current;
            } else if (current.length > bestMatch.length) { // current better than best
                bestMatch = current;
            }
        }
    }

    if (bestMatch) {
        return {
            base: bestMatch,
            config: config[bestMatch],
        };
    } else {
        return {};
    }
}//resolveMatchingConfig()

function ensureEndingSlash (path) {
    return /(\.html|\/)$/.test(path) ? path : `${path}/`;
}//ensureEndingSlash()

function resolveItem (item, pages, base, isNested) {
    if (typeof item === 'string') {
        return resolvePage(pages, item, base);
    } else if (Array.isArray(item)) {
        return Object.assign(resolvePage(pages, item[0], base), {
            title: item[1],
        });
    } else {
        if (isNested) {
            console.error(
                '[vuepress] Nested sidebar groups are not supported. ' +
                'Consider using navbar + categories instead.'
            );
        }

        const children = item.children || [];
        return {
            children: children.map(child => resolveItem(child, pages, base, true)),
            collapsable: item.collapsable !== false,
            title: item.title,
            type: 'group',
        };
    }
}//resolveItem()
