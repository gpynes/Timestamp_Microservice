// init project
const express = require('express')
const app = express()

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`)
})

// timestamp query parser
app.get('/:timestamp', (request, response) => {
  const query = request.params.timestamp

  const date = new Date(+query * 1000 || query)

  const dateObj = {
    unix: date.getTime() / 1000,
    natural: Date.parse(date) ? date.toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric'}) : null
  }
  response.json(dateObj)
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => console.log(`Your app is listening on port ${listener.address().port}`) )