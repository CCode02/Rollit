import express from 'express'
import mongoose from 'mongoose'
import middleware from './utils/middleware.js'
import logger from './utils/logger.js'
import config from './utils/config.js'
import loginRouter from "./controllers/login.js"
import gamesRouter from "./controllers/games.js"
import systemsRouter from "./controllers/systems.js"
import usersRouter from "./controllers/users.js"

const app = express()

logger.info('Connecting to', config.MONGODB_URI)

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info('Connected to mongoDB')
    })
    .catch((error) => {
        logger.error('Error connection to MongoDB:', error.message)
    })

app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', async (request, response) => {
    response.status(200).send('hello world')
})

app.use('/api/login', loginRouter)
app.use('/api/games', gamesRouter)
app.use('/api/systems', systemsRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)

export default app