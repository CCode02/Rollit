import mongoose from "mongoose"
import User from "../models/user.js"

const getAllUsers = () => {
    return User.find({})
}

const getUserById = (id) => {
    return User.findById(id)
}

export default {
    getAllUsers,
    getUserById
}