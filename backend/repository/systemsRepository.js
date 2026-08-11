import mongoose from "mongoose"
import System from "../models/system.js"

const getAllSystems = () => {
    return System.find({})
}

const getSystemById = (id) => {
    return System.findById(id)
}

export default {
    getAllSystems,
    getSystemById
}