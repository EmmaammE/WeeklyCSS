Original link : https://codepen.io/z-/pen/OBPJKK

# CSS 变量
cannot be used in property names,selectors or anything else besides property values.

custom-property-name
    --XXX命名

IE doesn't support.

reference：https://css-tricks.com/difference-between-types-of-css-variables/

# background

By defining background-size and background-position, to make the background-image display properly.

# Common media queries

boostrap：
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

# Animation improvement

In beta1 version, the box expand animation effect is not good. Another box will expand and shrink instantly when a box clicked. Compared to the original, I found that the **"max-width" property** of the container is curcial.

And to make the effect more vivid, the author **changes the "background-size" property's value from "auto 100%" to "auto 120%"** when the box clicked.

cubic-bezier:to define the speed of animation. http://cubic-bezier.com/#.17,.57,.14,.92