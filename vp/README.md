---
title: SegnoUI
home: true
features:
- title: Future-proof
  details: Built on top of W3C Web Component technologies, SegnoUI is designed to work natively within browsers of the future.
- title: Accessible
  details: SegnoUI provides a better experience by baking accessible behavior into its elements in accordance with WAI-ARIA accessibility guidelines.
- title: Themeable
  details: Elements are designed in grayscale so that you can customize them for your specific needs.
---

## Mission
SegnoUI aims to provide an ever evolving baseline of supplementary functionality to build and style rich internet applications.
In addition to augmenting browser functionality with new elements, SegnoUI should provide alternatives to native elements that have been 
implemented in an inconsistent or undesirable fashion.

## Compatibility
SegnoUI is built to work with browsers that have native support for the following technologies:

* HTML Templates
* Custom Elements v1
* Shadow DOM v1
* CSS Custom Properties

::: warning NOTE:
SegnoUI targets _technology_ support not _browser_ support. Coincidentally, several modern browsers have native support for the targeted technologies.
:::

### Legacy Browsers
SegnoUI does not support legacy browsers (i.e., Internet Explorer) for a few reasons.

1. **The library only has one developer.** Additional complexity will slow down development.
2. **Polyfills can't fix everything.** CSS Custom Properties cannot be polyfilled, but they are necessary to provide a native theming API.
   ES6 class syntax cannot be polyfilled, but it is required by the Custom Element v1 specification in order to register new elements.  
3. **Transpiling to legacy JavaScript is harmful to the evolution of the web.** Modern browsers continue to support newer features and optimize performance.

::: tip HelixUI
If you require a component library that supports IE11, please consider [HelixUI](https://rackerlabs.github.io/helix-ui/).
The two libraries may look similar, but SegnoUI is designed for the _future_ web while HelixUI is built to support the _present_ web.
:::

### Current Browser Support
As of November 2018:

* **Full Support:** Chrome, Opera, Safari, Firefox
* **Coming Soon:** Edge
* **No Support:** IE

