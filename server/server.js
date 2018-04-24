const path = require('path');
const express = require('express');
const currentPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(currentPath));


app.listen(port, ()=>{
    console.log(`Application Running on port : ${port}`);
});
