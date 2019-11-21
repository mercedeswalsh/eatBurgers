const { join } = require('path')
const express = require('express')

const app = express()
const db = require('./config')

app.use(express.json())
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

require('./routes')(app)

db.sync({ force: true })
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))