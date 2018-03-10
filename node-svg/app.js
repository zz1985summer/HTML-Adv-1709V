const qrImage = require('qr-image');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = new express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.post('/', (req, res) => {
    let name = req.body.name;
    let tel = req.body.tel;
    let email = req.body.email;
    let address = req.body.address;
    let company = req.body.company;

    let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:${company}
TEL;TYPE=WORK,VOICE:${tel}
ADR;TYPE=WORK,PREF:;;${address}
EMAIL:${email}
END:VCARD`;

    let svg = qrImage.image(vcard, {
        type: 'svg'
    });
    let time = new Date().getTime();
    let stream = svg.pipe(fs.createWriteStream(`public/${time}.svg`));

    stream.on('finish', () => {
        res.redirect(`${time}.svg`);
    });
});

app.listen(3000);