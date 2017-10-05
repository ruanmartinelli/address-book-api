import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import boolParser from 'express-query-boolean'
import expressValidator from 'express-validator'
import app from 'app/'
import errorHandlers from 'util/error-handlers'
import checkEnvVars from 'util/check-env-vars'
import { initFirebase } from 'util/firebase'

checkEnvVars()

const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(expressValidator())
server.use(boolParser())
server.use(express.static('docs'))
server.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'test' }))

initFirebase()

app.init(server)

server.use(errorHandlers.notFound)
server.use(errorHandlers.validationError)
server.use(errorHandlers.unauthorizedError)
server.use(errorHandlers.forbiddenError)
server.use(errorHandlers.serverError)

server.listen(process.env.APP_PORT, err => {
  if (err) throw err

  console.log(`
  👋   Welcome to the Address Book API

  👨   Author: Ruan Martinelli <martinelliruan@gmail.com>

  📚   Check the API documentation at http://localhost:${process.env.APP_PORT}

  Server listening on port ${process.env.APP_PORT}...
  `)
})

export default server
