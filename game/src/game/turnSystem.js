import { gameState }
from '../core/gameState.js'

import {
    hasValidMove,
    countPieces
}
from './rules.js'

import {
    uploadResult
}
from '../ui/resultUploader.js'

function finishGame(){

    gameState.gameOver = true

    const result =
    countPieces()

    if(result.black > result.white){

        gameState.winner =
        '🏆 玩家獲勝'
    }

    else if(
        result.white > result.black
    ){

        gameState.winner =
        '👹 BOSS獲勝'
    }

    else{

        gameState.winner =
        '🤝 平手'
    }

    uploadResult()
}

export function nextTurn(){

    gameState.currentPlayer *= -1

    const currentCanMove =

    hasValidMove(
        gameState.currentPlayer
    )

    const enemyCanMove =

    hasValidMove(
        -gameState.currentPlayer
    )

    if(
        !currentCanMove &&
        enemyCanMove
    ){

        gameState.currentPlayer *= -1

        return
    }

    if(
        !currentCanMove &&
        !enemyCanMove
    ){

        finishGame()
    }
}