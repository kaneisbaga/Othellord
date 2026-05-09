import {
    gameState
}
from './gameState.js'

import {
    renderBoard
}
from '../ui/renderBoard.js'

import {
    updateHUD
}
from '../ui/hud.js'

import {
    getAIMove
}
from '../game/minimaxAI.js'

import {
    applyMove,
    hasValidMove,
    countWinner
}
from '../game/rules.js'

export async function playerMove(x,y){

    if(gameState.gameOver)
        return

    const ok =
    applyMove(
        x,
        y,
        gameState.currentPlayer
    )

    if(!ok)
        return

    gameState.currentPlayer *= -1

    renderBoard()
    updateHUD()

    await nextTurn()
}

export async function nextTurn(){

    renderBoard()
    updateHUD()

    if(gameState.gameOver)
        return

    if(
        !hasValidMove(
            gameState.currentPlayer
        )
    ){

        gameState.currentPlayer *= -1

        renderBoard()
        updateHUD()

        if(
            !hasValidMove(
                gameState.currentPlayer
            )
        ){

            finishGame()
        }

        return
    }

    // 雙人模式
    // 完全不啟動AI

    if(
        gameState.twoPlayerMode
    ){
        return
    }

    // BOSS模式才啟動AI

    if(gameState.currentPlayer === -1){

        await bossTurn()
    }
}

async function bossTurn(){

    gameState.thinking = true

    renderBoard()
    updateHUD()

    await delay(1200)

    const move =
    getAIMove(-1)

    if(move){

        applyMove(
            move.x,
            move.y,
            -1
        )
    }

    gameState.currentPlayer = 1

    gameState.thinking = false

    renderBoard()
    updateHUD()

    await nextTurn()
}

function finishGame(){

    gameState.gameOver = true

    gameState.winner =
    countWinner()

    renderBoard()
    updateHUD()
}

function delay(ms){

    return new Promise(
        r => setTimeout(r,ms)
    )
}