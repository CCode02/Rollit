import express from 'express'
import jwt from "jsonwebtoken"
import gamesRepository from "../repository/gamesRepository.js"
import usersRepository from "../repository/usersRepository.js"
import { getTokenFrom } from "../utils/requestProcessing.js"

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
    const body = request.body
    const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)

    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }

    usersRepository.getUserById(decodedToken.id).then((user) => {
        const game = {
            name: body.name,
            dungeonMaster: user._id,
            players: [],
            system: body.system
        }
        gamesRepository.createGame(game).then((savedGame) => {
            user.gamesDM = user.gamesDM.concat(savedGame._id)
            usersRepository.updateUser(user.id, user).then((updatedUser) => {
                response.status(201).json(savedGame)
            })
        })
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