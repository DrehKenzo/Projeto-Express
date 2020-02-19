const express = require('express');

let app = express();

app.get('/', (req,res) => res.send("Ola mundo!"));
app.get('/produtos/:id?', (req,res) => {
  let {id} = req.params;
  res.send('eu tenho um produto com um id: ' + id);
});

app.listen(3000, () => {
  console.log('servidor rodando');
});