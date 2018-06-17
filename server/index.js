const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});

})

//El de variable o el puerto por defecto
// const PORT = process.env.PORT || 5000;
var port = process.env.PORT || 5000
app.listen(port);