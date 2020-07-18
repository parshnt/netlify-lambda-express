const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

app.get('/.netlify/functions/hello', (req, res) => {

    res.json({
        message: "TEST NETLIFY LAMBDA"
    })

})

//app.use(`/.netlify/functions/hello`, router);

module.exports = app;
module.exports.handler = serverless(app)