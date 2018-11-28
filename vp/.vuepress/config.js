module.exports = {
    title: 'SegnoUI',
    description: 'UI Component Library for the Future Web',
    themeConfig: {
        repo: 'SegnoUI/segno-ui',
        nav: [
        ],
        sidebar: {
            '/': [ '' ],
            '/foo/': [
                {
                    title: 'Foo',
                    collapsable: false,
                    children: [ 
                        'one',
                        'two',
                    ],
                },
            ],
            '/bar/': [ 
                {
                    title: 'Bar',
                    collapsable: false,
                    children: [
                        'three',
                        'four', 
                    ]
                }
            ],
        },
    },
};

