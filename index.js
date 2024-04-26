const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const productRoutes = require('./src/routes/products.js')

const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(productRoutes)

app.get('/', (req, res) => {
  res.send('Our first Node Express Server :)')
})

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Server is up :)'))
    .catch((error) => console.log(error))
})



/*
  CORS: Cross Origin Resource Sharing
*/