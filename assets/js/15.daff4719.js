(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{402:function(v,t,_){"use strict";_.r(t);var s=_(54),a=Object(s.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器渲染原理和性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理和性能优化"}},[v._v("#")]),v._v(" 浏览器渲染原理和性能优化")]),v._v(" "),_("h2",{attrs:{id:"进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[v._v("#")]),v._v(" 进程与线程")]),v._v(" "),_("ul",[_("li",[v._v("进程是操作系统资源分配的基本单位，进程中包含线程")]),v._v(" "),_("li",[v._v("线程是由进程管理的。为了提升浏览器的稳定性和安全性，浏览器采用了多进程的模型")])]),v._v(" "),_("p",[v._v("浏览器的进程:")]),v._v(" "),_("ul",[_("li",[v._v("浏览器进程：负责界面的显示，用户交互，调度其它进程")]),v._v(" "),_("li",[v._v("渲染进程：每个页卡都有单独的渲染进程，核心用于渲染进程")]),v._v(" "),_("li",[v._v("网络进程：主要处理网路资源加载(html,css,js)")]),v._v(" "),_("li",[v._v("GPU进程：3d绘制 提高性能")]),v._v(" "),_("li",[v._v("插件进程：插件")])]),v._v(" "),_("h2",{attrs:{id:"从输入url到浏览器渲染的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到浏览器渲染的过程"}},[v._v("#")]),v._v(" 从输入URL到浏览器渲染的过程")]),v._v(" "),_("h3",{attrs:{id:"浏览器进程之间的相互调用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程之间的相互调用"}},[v._v("#")]),v._v(" 浏览器进程之间的相互调用")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("用户输入url地址(会将关键字 会将关键字根据默认的引擎生成地址) 会开始导航")])]),v._v(" "),_("li",[_("p",[v._v("浏览器进程 会准备一个渲染进程用于渲染页面")])]),v._v(" "),_("li",[_("p",[v._v("网络进程加载资源，最终将加载的资源交给渲染进程")])]),v._v(" "),_("li",[_("p",[v._v("渲染完毕显示 ipc")])]),v._v(" "),_("li",[_("p",[v._v("七层网络模型 物理层 数据层 网络层 传输层(tcp 安全可靠 分段传输 udp 丢包的情况) (会话层 表示层 应用层)")])])]),v._v(" "),_("h3",{attrs:{id:"url请求过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url请求过程"}},[v._v("#")]),v._v(" url请求过程")]),v._v(" "),_("ul",[_("li",[v._v("先去查找缓存, 检测缓存是否过期，如果没有过期直接返回缓存的数据")]),v._v(" "),_("li",[v._v("看域名是否被解析过, DNS协议 将域名解析成ip地址(DNS 基于UDP) ip + 端口号")]),v._v(" "),_("li",[v._v("请求是HTTPS  SSL协商")]),v._v(" "),_("li",[v._v("ip地址来进行寻址，排队等待，最多能发送6个http请求")]),v._v(" "),_("li",[v._v("tcp 创建链接用于传输 (三次握手)")]),v._v(" "),_("li",[v._v("利用tcp传输数据 (拆分成数据包) 特点是 有序 可靠, 服务器会按照顺序来接收")]),v._v(" "),_("li",[v._v("http请求 (请求行 请求头 请求体)")]),v._v(" "),_("li",[v._v("默认不会断开(keep-alive) 为了下次传输数据时 可以复用上次创建的连接")]),v._v(" "),_("li",[v._v("服务器收到数据后(响应行 响应头 响应体)")]),v._v(" "),_("li",[v._v("服务器 返回301 302 会进行重定向操作")]),v._v(" "),_("li",[v._v("服务器 304 回去查询浏览器缓存进行返回")])]),v._v(" "),_("blockquote",[_("p",[v._v("浏览器接收完成资源之后怎么处理？")])]),v._v(" "),_("h3",{attrs:{id:"http的发展历程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http的发展历程"}},[v._v("#")]),v._v(" http的发展历程")]),v._v(" "),_("p",[v._v("http 0.9 负责传输html 最早的时候没有请求头 和 响应头\nhttp1.0 提供了 http的header 根据header的不同来处理不同的资源\nhttp1.1 默认开启了keep-alive 链路复用(不用再重新连接) 管线化(同时建立多个连接) 服务器处理多个请求(队头阻塞问题)\nhttp2.0 同一个tcp链接来发送数据 一个域名 一个tcp (多路复用) 头部压缩 服务器可以推送数据给客户端\nhttp3.0 解决了tcp 的队头阻塞问题 QUIC协议 采用了udp")]),v._v(" "),_("h3",{attrs:{id:"渲染流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程"}},[v._v("#")]),v._v(" 渲染流程")]),v._v(" "),_("blockquote",[_("p",[v._v("样式不会阻塞html解析  html 渲染时 会先扫描css和js 便解析边绘制\njs 会阻塞dom的解析 需要暂停dom解析去执行javascript, js可能会操作样式，所以需要等待样式加载完成,再继续加载\nperformance 去看就可以了\n为什么css放在上面,  js放在下面")])]),v._v(" "),_("ul",[_("li",[v._v("渲染进程将HTML转变成DOM属性结构")]),v._v(" "),_("li",[v._v("渲染进程把css文本转变成浏览器中的"),_("code",[v._v("stylesheet")])]),v._v(" "),_("li",[v._v("通过stylesheet计算出DOM节点的样式")]),v._v(" "),_("li",[v._v("根据DOM树创建布局树")]),v._v(" "),_("li",[v._v("通过布局树进行分层生产出图层树")]),v._v(" "),_("li",[v._v("将不同的图层进行绘制,转交给合成线程处理, 最终生产页面, 并显示到浏览器上")])]),v._v(" "),_("h2",{attrs:{id:"网络的优化策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络的优化策略"}},[v._v("#")]),v._v(" 网络的优化策略")]),v._v(" "),_("ul",[_("li",[v._v("减少HTTP请求数,因为请求多了 就会造成很多的TCP链接 重定向等等")]),v._v(" "),_("li",[v._v("避免重定向, 重定向会影响响应的速度")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("dns-prefetch")]),v._v(",进行DNS解析, why")]),v._v(" "),_("li",[v._v("采用域名分片技术，将资源放到不同的域名下。接触同一个域名最多处理6个TCP链接问题")]),v._v(" "),_("li",[v._v("采用"),_("code",[v._v("cdn")]),v._v("加速加快了访问的速度")]),v._v(" "),_("li",[v._v("gzip压缩优化 对传输资源进行体积压缩(html, js, css)")]),v._v(" "),_("li",[v._v("加载数据优先级: "),_("code",[v._v("preload")]),v._v("(预先请求当前页面需要的资源) "),_("code",[v._v("prefetch")]),v._v(" (将来页面中使用的资源) 将数据缓存到HTTP中")])]),v._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("link ref"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'preload'")]),v._v(" href"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'style.css'")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("as")]),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'style'")]),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])])]),_("h2",{attrs:{id:"渲染优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[v._v("#")]),v._v(" 渲染优化")]),v._v(" "),_("ul",[_("li",[v._v("重排和重绘")]),v._v(" "),_("li",[v._v("强制同步布局问题")]),v._v(" "),_("li",[v._v("布局抖动问题")]),v._v(" "),_("li",[v._v("渲染时给图片增加固定宽高")]),v._v(" "),_("li",[v._v("尽量使用"),_("code",[v._v("css3")]),v._v("动画")])]),v._v(" "),_("h2",{attrs:{id:"静态文件优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#静态文件优化"}},[v._v("#")]),v._v(" 静态文件优化")]),v._v(" "),_("h3",{attrs:{id:"图片优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[v._v("#")]),v._v(" 图片优化")]),v._v(" "),_("ul",[_("li",[v._v("避免空的"),_("code",[v._v("src")]),v._v("的图片")]),v._v(" "),_("li",[v._v("减少图片的尺寸，节约用户的流量")]),v._v(" "),_("li",[_("code",[v._v("img")]),v._v("标签设置"),_("code",[v._v("alt")]),v._v("属性，替身图片的加载失败时的用户体验")]),v._v(" "),_("li",[v._v("原生的"),_("code",[v._v("loading:lazy")]),v._v(" 图片懒加载")]),v._v(" "),_("li",[v._v("不同环境下记载不同尺寸和像素图片")])]),v._v(" "),_("div",{staticClass:"language-html extra-class"},[_("pre",{pre:!0,attrs:{class:"language-html"}},[_("code",[_("span",{pre:!0,attrs:{class:"token tag"}},[_("span",{pre:!0,attrs:{class:"token tag"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("img")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("src")]),_("span",{pre:!0,attrs:{class:"token attr-value"}},[_("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("./images/1.jpg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),_("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("sizes")]),_("span",{pre:!0,attrs:{class:"token attr-value"}},[_("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("(max-width:500px) 100px,(max-width:600px) 200px"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v("  "),_("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("srcset")]),_("span",{pre:!0,attrs:{class:"token attr-value"}},[_("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("./images/1.jpg 100w, ./images/3.jpg 200w"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n")])])]),_("ul",[_("li",[v._v("对于较大的图片可以采用渐进式图片")]),v._v(" "),_("li",[v._v("采用"),_("code",[v._v("Base64URL")]),v._v("减少图片的请求")]),v._v(" "),_("li",[v._v("采用雪碧图合并图标图片等")])]),v._v(" "),_("h3",{attrs:{id:"html优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html优化"}},[v._v("#")]),v._v(" "),_("code",[v._v("html")]),v._v("优化")]),v._v(" "),_("ul",[_("li",[v._v("语义化"),_("code",[v._v("HTML")]),v._v(": 代码简洁清晰，有利于搜索引擎,便于团队的开发")]),v._v(" "),_("li",[v._v("提前声明字符编码, 让浏览器快速确定如何渲染网页的内容")]),v._v(" "),_("li",[v._v("减少HTML嵌套关系、减少DOM节点的数量")]),v._v(" "),_("li",[v._v("删除多余空格、空行、注释、及无用的属性等")]),v._v(" "),_("li",[v._v("避免使用table布局 为什么")])]),v._v(" "),_("h3",{attrs:{id:"css优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css优化"}},[v._v("#")]),v._v(" "),_("code",[v._v("css")]),v._v("优化")]),v._v(" "),_("ul",[_("li",[v._v("减少伪类选择器、减少样式的层数、减少使用通配符")]),v._v(" "),_("li",[v._v("避免使用"),_("code",[v._v("css")]),v._v("表达式，"),_("code",[v._v("css")]),v._v("表达式会频繁的求值，当页面滚动，鼠标移动都会重新计算")]),v._v(" "),_("li",[v._v("删除空行、注释、减少无意义的单位、"),_("code",[v._v("css")]),v._v("进行压缩")]),v._v(" "),_("li",[v._v("使用外链"),_("code",[v._v("css")]),v._v(",可以对"),_("code",[v._v("css")]),v._v("进行缓存")]),v._v(" "),_("li",[v._v("添加媒体字段，只加载有效的"),_("code",[v._v("css")]),v._v("文件")]),v._v(" "),_("li",[_("code",[v._v("css contain")]),v._v(" 属性,将元素进行隔离")]),v._v(" "),_("li",[v._v("减少使用@import, 由于@import是链式加载的")])]),v._v(" "),_("h3",{attrs:{id:"js优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js优化"}},[v._v("#")]),v._v(" "),_("code",[v._v("JS")]),v._v("优化")]),v._v(" "),_("ul",[_("li",[v._v("通过async defer异步加载文件")]),v._v(" "),_("li",[v._v("减少DOM操作, 缓存访问过的元素")]),v._v(" "),_("li",[v._v("操作不直接应用到DOM上, 而应用到虚拟DOM上。最有一次性应用到DOM上")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("webworker")]),v._v("解决程序阻塞问题")]),v._v(" "),_("li",[_("code",[v._v("Intersectionobserver")])]),v._v(" "),_("li",[v._v("虚拟滚动")])]),v._v(" "),_("h3",{attrs:{id:"优化策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化策略"}},[v._v("#")]),v._v(" 优化策略")]),v._v(" "),_("ul",[_("li",[v._v("关键资源个数越多，首次页面加载的时间就越长")]),v._v(" "),_("li",[v._v("关键资源的大小，内容越小，下载时间越短")]),v._v(" "),_("li",[v._v("优化白屏： 内联"),_("code",[v._v("css")]),v._v("和内联"),_("code",[v._v("js")]),v._v("移除文件下载，较小文件体积")]),v._v(" "),_("li",[v._v("预渲染，打包时进行预渲染")]),v._v(" "),_("li",[v._v("使用"),_("code",[v._v("SSR")]),v._v("加速首屏的加载(好废物无端资源), 有利于"),_("code",[v._v("SEO")]),v._v("优化。首屏利用服务端渲染，后续采用客户端渲染")])]),v._v(" "),_("h3",{attrs:{id:"浏览器的存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的存储"}},[v._v("#")]),v._v(" 浏览器的存储")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cookie")]),v._v(": cookie过期时间内一直有效，内存大小"),_("code",[v._v("4k")]),v._v("左右】同时限制字段个数，不适合大量的数据存储 ，每次请求都会携带cookie,主要是可以利用做身份检查")])]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("设置"),_("code",[v._v("cookie")]),v._v("的有效期")]),v._v(" "),_("li",[v._v("根据不同子域划分"),_("code",[v._v("cookie")]),v._v("较少的传输")]),v._v(" "),_("li",[v._v("建泰资源域名和"),_("code",[v._v("cookie")]),v._v("域名采用不同的域名， 避免静态资源的访问时候携带"),_("code",[v._v("cookie")])])])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("localStorage")]),v._v(": chrome下最大存储"),_("code",[v._v("5M")]),v._v(",除非手动清除，否则就一直存在。利用"),_("code",[v._v("localStorage")]),v._v("存储静态资源")]),v._v(" "),_("li",[_("code",[v._v("sessionStorage")]),v._v(": 会话级别的存储，可用于页面之间的传值")]),v._v(" "),_("li",[_("code",[v._v("indexDB")]),v._v(": 浏览器的本地数据库(基本无上限)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);