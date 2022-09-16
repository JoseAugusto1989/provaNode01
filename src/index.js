const express = require('express')
const router = require('./route/movies.route')

const app = express()
app.use(express.json())
app.use('/api/movies', router)

app.listen(8070, () => console.log('Server up!'))