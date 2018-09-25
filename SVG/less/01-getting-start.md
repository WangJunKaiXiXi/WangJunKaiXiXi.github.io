#安装node

http://nodejs.cn/download/

```bash
$ node -v
$ npm -v
```

安装
```
$ npm install -g less

win+r cmd
win+x powershell
$ cd less
$ dir

$ lessc styles.less
$ lessc styles.less styles.css

Easy LESS vscode插件 自动编译

```

浏览器端用法
```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="https://cdn.bootcss.com/less.js/3.0.4/less.min.js"></script>
```
+ less.js 必须在style.less文件之后
+ rel="stylesheet/less"