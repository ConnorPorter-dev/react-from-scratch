const express = require('express')
const path = require('path')
const port = parseInt(process.env.PORT || '8080', 10)
const app = express()
const router = express.Router()


app.listen(port, () => {
	console.log("Listening on " + port)
})
