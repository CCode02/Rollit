import mongoose from "mongoose"
import Game from "../models/game.js"

const getAll = () => {
    return Game.find({})
}

const getById = (id) => {
    return Game.findById(id)
}

const createGame = (newGame) => {
    const game = new Game(newGame)

    return game.save()
}

const deleteGame = (id) => {
    return Game.findByIdAndDelete(id)
}

const updateGame = (id, game) => {
    return Game.findByIdAndUpdate(id, game, { returnDocument: 'after' })
}

export default {
    getAll,
    getById,
    createGame,
    deleteGame,
    updateGame
}