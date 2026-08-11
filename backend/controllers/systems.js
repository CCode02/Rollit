import express from "express"
import systemsRepository from "../repository/systemsRepository.js"

const systemsRouter = express.Router()

systemsRouter.get('/', (request, response) => {
    systemsRepository.getAllSystems().then((systems) => {
        response.json(systems)
    })
})

systemsRouter.get('/:id', (request, response) => {
    systemsRepository.getSystemById(request.params.id).then((system) => {
        response.json(system)
    })
})

systemsRouter.post('/', (request, response) => {
    systemsRepository.createSystem(request.body).then((savedSystem) => {
        response.status(201).json(savedSystem)
    })
})

export default systemsRouter