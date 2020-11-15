import 'reflect-metadata'
import './database'

import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

app.listen('3333', () => console.log('Server started on port 3333'))

app.use(routes)

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})
