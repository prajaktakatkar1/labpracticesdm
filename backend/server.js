const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())


// add the routers
const routerEmp = require('./routes/emp')
app.use('/emp', routerEmp)


app.use('/', (request, response) => {
    response.send('welcome to emp')
  })

app.listen(4000, '0.0.0.0', () => {
  console.log('product-server started on port 4000')
})
