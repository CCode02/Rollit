import express from "express"
import usersRepository from "../repository/usersRepository.js"

const usersRouter = express.Router()

usersRouter.get('/', (request, response) => {
    usersRepository.getAllUsers().then((users) => {
        response.json(users)
    })
})

export default usersRouter