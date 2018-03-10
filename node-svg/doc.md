# Node-SVG

## 执行命令
    - 命令的作用
    - 命令执行的位置
    - 命令的具体语句
    - 命令执行后的结果

## create directory: node-svg

## node-svg/ cmd: npm init
   `package.json`

## cmd: npm i -g cnpm --registry=https://registry.npm.taobao.org

## node-svg/ cmd: cnpm i -S qr-image

## create node-svg/app.js

## gen qr code
```javascript
const qr = requeire('qr-image');

let svg = qr.image(vcard, {type: 'svg'});

svg.pipe(require('fs').createWriteStream('test.svg'));
```

## vCard

## form.html

## node-svg/ cmd: cnpm i -S express
```javascript
const express = require('express');
let app = new express();
app.listen(3000);
```

## node-svg/ cmd: cnpm i -S body-parser
