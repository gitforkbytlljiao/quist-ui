(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(s,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"counter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#counter","aria-hidden":"true"}},[s._v("#")]),s._v(" Counter")]),s._v(" "),a("blockquote",[a("p",[s._v("计数器组件")])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ npm install quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("ui "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])])]),a("h2",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入","aria-hidden":"true"}},[s._v("#")]),s._v(" 引入")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" name"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'quist-counter'")]),s._v(" src"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'@quist-ui/quist-counter/index'")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("h4",{attrs:{id:"默认计数器展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认计数器展示","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认计数器展示")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter value"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{1}}"')]),s._v(" @on"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("change"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"valueChange"')]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h4",{attrs:{id:"禁止更改计数器展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止更改计数器展示","aria-hidden":"true"}},[s._v("#")]),s._v(" 禁止更改计数器展示")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter value"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{10}}"')]),s._v(" disabled"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h4",{attrs:{id:"设置最大值的计数器展示-最大值为10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置最大值的计数器展示-最大值为10","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置最大值的计数器展示(最大值为10)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter value"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{3}}"')]),s._v(" max"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{10}}"')]),s._v(" @on"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("change"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"valueChange"')]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h4",{attrs:{id:"设置最小值的计数器展示-最小值为2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置最小值的计数器展示-最小值为2","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置最小值的计数器展示(最小值为2)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter value"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{1}}"')]),s._v(" min"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{2}}"')]),s._v(" @on"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("change"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"valueChange"')]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h4",{attrs:{id:"自定义计数器样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义计数器样式","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义计数器样式")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter value"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{1}}"')]),s._v(" @on"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("change"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"valueChange"')]),s._v(" width"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{200}}"')]),s._v(" height"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{60}}"')]),s._v(" bg"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"#f8f8f8"')]),s._v(" border"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("radius"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{1}}"')]),s._v(" disabled"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"#E64340"')]),s._v(" border"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"#1890ff"')]),s._v(" f"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"#1890ff"')]),s._v(" f"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("size"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"{{48}}"')]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n更详细代码可以参考 "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("counter demo"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("https"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("JDsecretFE"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("quist"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("ui"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("tree"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("master"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("Counter"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ux"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n## "),a("span",{attrs:{class:"token constant"}},[s._v("API")]),s._v(" \n\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 属性 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 说明 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 类型 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 默认值 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" value "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 当前数值 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" width "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 整体的宽度 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("240")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" height "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 整体的高度 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("80")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" border"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 边框的颜色 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`String`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" #d9d9d9 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" border"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("radius "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 圆角大小"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`建议不要设置0或超过6的值`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" bg"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 加减按钮的背景颜色 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`String`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" #f3f2f8 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" f"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 加减按钮及中间数字的颜色 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`String`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" #"),a("span",{attrs:{class:"token number"}},[s._v("666666")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" f"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("size "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 加减按钮及中间数字的大小 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("32")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" disabled"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("color "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 禁用状态时，加减按钮及中间数字的颜色 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`String`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" #cccccc "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" min "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 最小值 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" max "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 最大值 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Number`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" disabled "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 是否禁用 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Boolean`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" on"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("change "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 变化回调 "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Function`")])]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n\n\n## 更新日志\n\n#### v1"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token number"}},[s._v("0.0")]),s._v("（"),a("span",{attrs:{class:"token number"}},[s._v("2018")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("09")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("30")]),s._v("）\n"),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" 初始版本\n\n#### v1"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token number"}},[s._v("0.9")]),s._v("（"),a("span",{attrs:{class:"token number"}},[s._v("2018")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("11")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("12")]),s._v("）\n"),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("优化"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 可自定义样式，计数器的宽高、边框颜色、圆角大小、加减号按钮的背景色、字体大小、字体颜色、禁用时的字体颜色。\n"),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" 删除计数器中间可输入的功能。\n")])])])])}],!1,null,null,null);n.options.__file="counter.md";t.default=n.exports}}]);