import express from 'express'
import { getAllManufacturers, getManufacturerById } from './controllers/manufacturers'
import { getAllProducts, getProductsById } from './controllers/products'
import path from 'path'

const app = express()

app.use(express.static('public'))

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:id', getManufacturerById)

app.get('/products', getAllProducts)

app.get('/products/:id', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
