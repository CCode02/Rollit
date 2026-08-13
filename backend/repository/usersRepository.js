import mongoose from "mongoose"
import User from "../models/user.js"

const getAllUsers = () => {
    return User.find({})
}

export default {
    getAllUsers
}