const express = require('express')
const router = require('./route/prova.route')

const app = express()
app.use(express.json())
app.use('/prova', router)

app.listen(8070, () => console.log('Server up!'))