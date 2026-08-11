import mongoose from "mongoose"
import System from "../models/system.js"

const getAllSystems = () => {
    return System.find({})
}

const getSystemById = (id) => {
    return System.findById(id)
}

const createSystem = (newSystem) => {
    const system = new System(newSystem)

    return system.save()
}

export default {
    getAllSystems,
    getSystemById,
    createSystem
}