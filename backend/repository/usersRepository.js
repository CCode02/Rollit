import bcrypt from "bcrypt"
import User from "../models/user.js"

const getAllUsers = () => {
    return User.find({})
}

const getUserById = (id) => {
    return User.findById(id)
}

const getUserByUsername = (username) => {
    return User.findOne({ username })
}

const createUser = async (newUser) => {
    const { username, name, password } = newUser

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash,
        gamesDM: [],
        gamesPlayer: []
    })

    return user.save()
}

const deleteUser = (id) => {
    return User.findByIdAndDelete(id)
}

const updateUser = (id, user) => {
    console.log('user:', user)
    return User.findByIdAndUpdate(id, user, { returnDocument: 'after' })
}

export default {
    getAllUsers,
    getUserById,
    getUserByUsername,
    createUser,
    deleteUser,
    updateUser
}