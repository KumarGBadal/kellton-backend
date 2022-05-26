// Import Express
const express = require('express')
const mongoose = require('mongoose')
const apiroute = require('./routes/api_route')
const cors = require('cors')

// Intialize the Application
const app = express()

// Setup Server Port
const port = 8080
app.use(express.json()) // Set Content Type to JSON

// Send Message for your localhost
app.use('/', apiroute)
app.use(cors())



const url = "
mongodb+srv://KumarG:KumarG@700@kelltontech.uui3r.mongodb.net/Kellton-Ecommerce?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true})
.then(() => {
    console.log('Database Connected')
}).catch(err => console.log(err))



