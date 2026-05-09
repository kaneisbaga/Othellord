import {
    gameState
}
from '../core/gameState.js'

export function showVictory(){

    if(!gameState.gameOver)
        return

    console.log(
        gameState.winner
    )
}