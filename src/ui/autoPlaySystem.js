import { gameState }
from '../core/gameState.js'

import {
    minimaxMove
}
from '../game/minimaxAI.js'

import {
    makeMove
}
from '../game/board.js'

import {
    flipPieces
}
from '../game/rules.js'

import {
    nextTurn
}
from '../game/turnSystem.js'

import {
    renderBoard
}
from './renderBoard.js'

import {
    updateHUD
}
from './hud.js'

let running = false

export function startAutoPlay(){

    if(running)
        return

    running = true

    loop()
}

export function stopAutoPlay(){

    running = false
}

function loop(){

    if(!running)
        return

    if(gameState.gameOver){

        running = false

        return
    }

    const player =
    gameState.currentPlayer

    const move =
    minimaxMove(player)

    // 沒位置可下

    if(!move){

        gameState.currentPlayer *= -1

        renderBoard()

        updateHUD()

        setTimeout(
            loop,
            10
        )

        return
    }

    makeMove(
        move.x,
        move.y,
        player
    )

    flipPieces(
        move.x,
        move.y,
        player
    )

    nextTurn()

    renderBoard()

    updateHUD()

    setTimeout(
        loop,
        10
    )
}