const express = require('express');

let app = express();

app.get('/', (req,res) => res.send("Ola mundo!"))

app.listen(3000, () => {
    console.log('servidor rodando');
});