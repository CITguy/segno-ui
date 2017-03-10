# SegnoUI
An experiment in developing a Web Component library.


## Grid
* CSS Class-Based
* Flexbox-Based
* 12 Columns
    * with or without gutter

```less
/* Gutterless */
.flex-row { ... }
.flex-col { ... }

/* Guttered */
.grid-row { ... }
.grid-col { ... }

/* Column Span */
.span-N { ... } /* 1 <= N <= 12 */
.span-B-N { ... }

/* Column Offset */
.offset-N { ... } /* 1 <= N <= 12 */
.offset-B-N { ... }

/* Element (re)Ordering */
.order-N { ... } /* 1 <= N <= 12 */
.order-B-N { ... }
```

_Where **B** is `xs`, `sm`, `md`, `lg`, or `xl`_
