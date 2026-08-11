import mongoose from "mongoose"
import System from "../models/system.js"

const getAllSystems = () => {
    return System.find({})
}

export default {
    getAllSystems
}