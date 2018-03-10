const qrImage = require('qr-image');
const fs = require('fs');

// Quick Response Code
let svg = qrImage.image('Hello qr code', {
    type: 'svg'
});

svg.pipe(fs.createWriteStream('test.svg'));