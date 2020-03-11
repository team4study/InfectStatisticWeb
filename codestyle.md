# Codestyle
# 代码风格来源：[腾讯前端代码规范](https://my.oschina.net/u/1398304/blog/305484)
# 正文
## 项目命名
项目名全部采用小写方式， 以中划线分隔。 比如： my-project-name

## 目录名
目录名参照上一条规则,有复数结构时，要采用复数命名法，比如说： scripts, styles, images, data-models

## JavaScript文件命名
所有js文件名，多个单词组成时，采用中划线连接方式，比如说： 账号模型文件 account-model.js

## CSS，SCSS文件命名
多个单词组成时，采用中划线连接方式，比如说：retina-sprites.scss

## HTML文件命名
多个单词组成时，采用中划线连接方式，比如说: error-report.html

## HTML
### 语法
* 使用四个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
* 嵌套的节点应该缩进（四个空格）。
* 在属性上，使用双引号，不要使用单引号。
* 不要在自动闭合标签结尾处使用斜线 - HTML5 规范 指出他们是可选的。
* 不要忽略可选的关闭标签（例如，</li> 和</body>）。
### 字符编码
通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式。
` <head> <meta charset="UTF-8"> </head> `
### 引入 CSS 和 JavaScript
根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。
### 规范链接
* 使用 link
* 使用 style
* 使用 script
属性顺序
### HTML 属性应该按照特定的顺序出现以保证易读性。
* id
* class
* name
* data-*
* src, for, type, href
* title, alt
* aria-*, role

## CSS
### 语法
* 使用四个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
* 使用组合选择器时，保持每个独立的选择器占用一行。
* 为了代码的易读性，在每个声明的左括号前增加一个空格。
* 声明块的右括号应该另起一行。
* 每条声明 : 后应该插入一个空格。
* 每条声明应该只占用一行来保证错误报告更加准确。
* 所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。
* 逗号分隔的取值，都应该在逗号之后增加一个空格。比如说box-shadow
* 不要在颜色值 rgb() rgba() hsl() hsla()和 rect()中增加空格，并且不要带有取值前面不必要的 0 (比如，使用 .5 替代 0.5)。This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
* 所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。
* 尽可能使用短的十六进制数值，例如使用 #fff 替代#ffffff。
* 为选择器中的属性取值添加引号，例如input[type="text"]。 他们只在某些情况下可有可无，所以都使用引号可以增加一致性。
* 不要为 0 指明单位，比如使用 margin: 0; 而不是margin: 0px;。
### 声明顺序
相关的属性声明应该以下面的顺序分组处理：
1.Positioning
2.Box model 盒模型
3.Typographic 排版
4.Visual 外观
Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。
其他属性只在组件 __内部__ 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。
### Class 命名
* 保持 Class 命名为全小写，可以使用短划线（不要使用下划线和 camelCase 命名）。短划线应该作为相关类的自然间断。(例如，.btn 和 .btn-danger)。
* 避免过度使用简写。.btn 可以很好地描述 button，但是 .s 不能代表任何元素。
* Class 的命名应该尽量短，也要尽量明确。
* 使用有意义的名称；使用结构化或者作用目标相关，而不是抽象的名称。
* 命名时使用最近的父节点或者父 class 作为前缀。
* 使用 .js-* classes 来表示行为(相对于样式)，但是不要在 CSS 中包含这些 classes。
### 选择器
* 使用 classes 而不是通用元素标签来优化渲染性能。
* 避免在经常出现的组件中使用一些属性选择器 (例如，[class^="..."])。浏览器性能会受到这些情况的影响。
* 减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内。
* 只在必要的情况下使用后代选择器 (例如，没有使用带前缀 classes 的情况).

## JavaScript
### Indentation,分号,单行长度
* 一律使用4个空格
* continuation-indentation 同样适用4个空格，跟上一行对齐
* Statement 之后一律以分号结束， 不可以省略
* 单行长度，理论上不要超过80列，不过如果编辑器开启 soft wrap 的话可以不考虑单行长度
* 接上一条，如果需要换行，存在操作符的情况，一定在操作符后换行，然后换的行缩进4个空格
### 空行
* 方法之间加
* 单行或多行注释前加
* 逻辑块之间加空行增加可读性
### 变量命名
* 标准变量采用驼峰标识
* 使用的ID的地方一定全大写
* 使用的URL的地方一定全大写, 比如说 reportURL
* 涉及Android的，一律大写第一个字母
* 涉及iOS的，一律小写第一个，大写后两个字母
* 常量采用大写字母，下划线连接的方式
* 构造函数，大写第一个字母
` var thisIsMyName; var goodID; var AndroidVersion; var iOSVersion; var MAX_COUNT = 10; function Person(name) { this.name = name } `
### 字符常量
* 一般情况下统一使用 '' 单引号
### undefined使用场景
* 永远不要直接使用undefined进行变量判断
* 使用字符串 "undefined" 对变量进行判断
` Bad var person; console.log(person === undefined); //true // Good console.log(typeof person); // "undefined" `
### 单行注释
* 双斜线后，必须跟注释内容保留一个空格
* 可独占一行, 前边不许有空行, 缩进与下一行代码保持一致
* 可位于一个代码行的末尾，注意这里的格式
` // Good if (condition) { // if you made it here, then all security checks passed allowed(); } var zhangsan = "zhangsan"; // 双斜线距离分号四个空格，双斜线后始终保留一个空格 `
### 多行注释格式
* 最少三行，格式如下
`  /*  * 注释内容与星标前保留一个空格  */  `
* 前边留空一行
__何时使用__
* 难于理解的代码段
* 可能存在错误的代码段
* 浏览器特殊的HACK代码
* 想吐槽的产品逻辑, 合作同事
* 业务逻辑强相关的代码
### 文档注释
* 各类标签 @param @method 等 参考[http://usejsdoc.org/](http://usejsdoc.org/)
* 格式如下
` /**  * here boy, look here , here is girl  * @method lookGril  * @param {Object} balabalabala  * @return {Object} balabalabala  */ `
__用在哪里__
* All methods
* All constructors
* All objects with documented methods
### 括号对齐
* 标准示例 括号前后有空格， 花括号起始 不另换行，结尾新起一行
* 花括号必须要， 即使内容只有一行
* 涉及 if for while do...while try...catch...finally 的地方都必须使用花括号
* if else else前后留有空格
` if (condition) { doSomething(); } else { doSomethingElse(); } `
### switch
* 采用以下的格式， switch和括号之间有空格， case需要缩进， break之后跟下一个case中间留一个blank line
* 花括号必须要， 即使内容只有一行， 决不允许右边第二种情switch 的 falling through 一定要有注释特别说明， no default 的情况也需要注释特别说明况
` switch (condition) { case "first": // code break; case "third": // code break; default: // code } switch (condition) { // obvious fall through // 这里为啥JSHint默认就会放过，因为 case "first" 内无内容 case "first": case "second": // code break; case "third": // code /* falls through */ // 这里为啥要加这样的注释， 明确告知JSHint放过此处告警 default: // code } switch(condition) { case "first": // code break; case "second": // code break; // no default } `
### for
* 普通for循环, 分号后留有一个空格， 判断条件等内的操作符两边不留空格， 前置条件如果有多个，逗号后留一个空格
* for-in 一定要有 hasOwnProperty 的判断， 否则 JSLint 或者 JSHint 都会有一个 warn
` var values = [ 1, 2, 3, 4, 5, 6, 7 ], i, len; for (i=0, len=values.length; i<len; i++) { process(values[i]); } var prop; for (prop in object) { // 注意这里一定要有 hasOwnProperty 的判断， 否则 JSLint 或者 JSHint 都会有一个 warn ！ if (object.hasOwnProperty(prop)) { console.log("Property name is " + prop); console.log("Property value is " + object[prop]); } } `
### 变量声明
所有函数内变量声明放在函数内头部，只使用一个 var(多了JSLint报错)， 一个变量一行， 在行末跟注释!注释!注释啊!亲
` function doSomethingWithItems(items) { var value = 10, // 注释啊，注释啊，亲 result = value + 10, // 注释啊，注释啊 i, // 注释啊，注释啊，亲 len; // 注释啊，注释啊，亲 for (i=0, len=items.length; i < len; i++) { doSomething(items[i]); } } `
### 函数声明
* 一定先声明再使用， 不要利用 JavaScript engine的hoist特性, 违反了这个规则 JSLint 和 JSHint都会报 warn
* function declaration 和 function expression 的不同，function expression 的（）前后必须有空格，而function declaration 在有函数名的时候不需要空格， 没有函数名的时候需要空格。
* 函数调用括号前后不需要空格
* 立即执行函数的写法, 最外层必须包一层括号
* "use strict" 决不允许全局使用， 必须放在函数的第一行， 可以用自执行函数包含大的代码段, 如果 "use strict" 在函数外使用， JSLint 和 JSHint 均会报错
` function doSomething(item) { // do something } var doSomething = function (item) { // do something } // Good doSomething(item); // Bad: Looks like a block statement doSomething (item); // Good var value = (function() { // function body return { message: "Hi" } }()); // Good (function() { "use strict"; function doSomething() { // code } function doSomethingElse() { // code } })(); `
### 杂项
* 完全避免 == != 的使用， 用严格比较条件 === !==
* eval 非特殊业务， 禁用！！！
* with 非特殊业务， 禁用！！！
