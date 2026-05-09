import { gameState }
from '../core/gameState.js'

import {
    isValidMove,
    flipPieces
}
from './rules.js'

import {
    makeMove
}
from './board.js'

import {
    nextTurn
}
from './turnSystem.js'

export function aiMove(){

    if(gameState.gameOver)
        return

    let moves = []

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            if(
                isValidMove(
                    x,
                    y,
                    -1
                )
            ){

                moves.push({x,y})
            }
        }
    }

    if(moves.length <= 0){

        nextTurn()
        return
    }

    const move =
    moves[
        Math.floor(
            Math.random() *
            moves.length
        )
    ]

    makeMove(
        move.x,
        move.y,
        -1
    )

    flipPieces(
        move.x,
        move.y,
        -1
    )

    nextTurn()
}