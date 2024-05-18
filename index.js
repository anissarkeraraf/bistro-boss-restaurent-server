const express = require('express');
app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000


// middle were
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is Runing')
})

app.listen(port, () => {
    console.log(`Backend is runing on ${port}`)
})