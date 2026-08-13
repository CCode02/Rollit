import express from "express"
import usersRepository from "../repository/usersRepository.js"

const usersRouter = express.Router()

usersRouter.get('/', (request, response) => {
    usersRepository.getAllUsers().then((users) => {
        response.json(users)
    })
})

usersRouter.get('/:id', (request, response) => {
    usersRepository.getUserById(request.params.id).then((user) => {
        response.json(user)
    })
})

usersRouter.post('/', (request, response) => {
    usersRepository.createUser(request.body).then((savedUser) => {
        response.status(201).json(savedUser)
    })
})

export default usersRouter