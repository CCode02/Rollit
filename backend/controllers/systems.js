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

systemsRouter.delete('/:id', (request, response) => {
    systemsRepository.deleteSystem(request.params.id).then(() => {
        response.status(204).end()
    })
})

systemsRouter.put('/:id', (request, response) => {
    systemsRepository.updateSystem(request.params.id, request.body).then((updatedSystem) => {
        response.json(updatedSystem)
    })
})

export default systemsRouter