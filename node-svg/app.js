const qrImage = require('qr-image');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = new express();

app.get('/', (req, res)=>{
    // ...
    res.end('It works...');
});

app.listen(3000);