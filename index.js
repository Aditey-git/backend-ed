const express = require('express');
require('dotenv').config()
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send(' Hello Twitter')
})

app.get( '/youtube',(req, res) => {
    res.send('<h2>Hello Youtube</h2>')
    }
)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at port ${port}`)
})