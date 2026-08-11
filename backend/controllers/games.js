import express from 'express'
import gamesRepository from "../repository/gamesRepository.js"

const gamesRouter = express.Router()

gamesRouter.get('/', (request, response) => {
    gamesRepository.getAll().then((games) => {
        response.json(games)
    })
})

gamesRouter.get('/:id', (request, response) => {
    gamesRepository.getById(request.params.id).then((game) => {
        response.json(game)
    })
})

gamesRouter.post('/', (request, response) => {
    gamesRepository.createGame(request.body).then((savedGame) => {
        response.status(201).json(savedGame)
    })
})

gamesRouter.delete('/:id', (request, response) => {
    gamesRepository.deleteGame(request.params.id).then(() => {
        response.status(204).end()
    })
})

gamesRouter.put('/:id', (request, response) => {
    gamesRepository.updateGame(request.params.id, request.body).then((updatedGame) => {
        response.json(updatedGame)
    })
})

export default gamesRouter