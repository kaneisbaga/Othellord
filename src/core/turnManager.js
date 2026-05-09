import {
    gameState
}
from './gameState.js'

export function switchTurn(){

    gameState.currentPlayer *= -1
}