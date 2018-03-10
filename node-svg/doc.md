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

let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Gump;Forrest;;Mr.;
FN:Forrest Gump
ORG:Bubba Gump Shrimp Co.
TITLE:Shrimp Man
PHOTO;VALUE=URI;TYPE=GIF:http://www.example.com/dir_photos/my_photo.gif
TEL;TYPE=WORK,VOICE:(111) 555-1212
TEL;TYPE=HOME,VOICE:(404) 555-1212
ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America
LABEL;TYPE=WORK,PREF:100 Waters Edge\nBaytown\, LA 30314\nUnited States of America
ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
LABEL;TYPE=HOME:42 Plantation St.\nBaytown\, LA 30314\nUnited States of America
EMAIL:forrestgump@example.com
REV:2008-04-24T19:52:43Z
END:VCARD
`;

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
