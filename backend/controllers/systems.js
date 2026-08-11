import express from "express"
import systemsRepository from "../repository/systemsRepository.js"

const systemsRouter = express.Router()

systemsRouter.get('/', (request, response) => {
    systemsRepository.getAllSystems().then((systems) => {
        response.json(systems)
    })
})

export default systemsRouter