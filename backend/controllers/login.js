import express from 'express'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import usersRepository from "../repository/usersRepository.js"

const loginRouter = express.Router()

loginRouter.post('/', (request, response) => {
    const { username, password } = request.body

    const user = usersRepository.getUserByUsername(username).then((user) => {
        if (user) {
            bcrypt.compare(password, user.passwordHash).then((passwordCorrect) => {
                if (!passwordCorrect) {
                    return response.status(401).json({ error: 'invalid password' })
                }

                const userForToken = {
                    username: user.username,
                    id: user._id
                }

                const token = jwt.sign(
                    userForToken,
                    process.env.SECRET,
                    { expiresIn: 60 * 60 }
                )

                response.status(200).send({ token, username: user.username, name: user.name })
            })
        } else {
            response.status(401).json({ error: 'invalid username' })
        }
    })
})

export default loginRouter