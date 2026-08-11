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

const deleteSystem = (id) => {
    return System.findByIdAndDelete(id)
}

const updateSystem = (id, system) => {
    return System.findByIdAndUpdate(id, system, { returnDocument: 'after' })
}

export default {
    getAllSystems,
    getSystemById,
    createSystem,
    deleteSystem,
    updateSystem
}