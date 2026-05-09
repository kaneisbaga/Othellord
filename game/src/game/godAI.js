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

function evaluateBoard(board){

    let score = 0

    const corners = [

        [0,0],
        [7,0],
        [0,7],
        [7,7]
    ]

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            const value =
            board[y][x]

            if(value === -1){

                score += 2
            }

            if(value === 1){

                score -= 2
            }
        }
    }

    for(const [cx,cy] of corners){

        if(board[cy][cx] === -1){

            score += 100
        }

        if(board[cy][cx] === 1){

            score -= 100
        }
    }

    return score
}

export function godAI(){

    let bestScore =
    -Infinity

    let bestMove = null

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            if(
                isValidMove(
                    x,
                    y,
                    -1
                )
            ){

                const score =

                Math.random()*100

                if(score > bestScore){

                    bestScore = score

                    bestMove = {x,y}
                }
            }
        }
    }

    if(bestMove){

        makeMove(
            bestMove.x,
            bestMove.y,
            -1
        )

        flipPieces(
            bestMove.x,
            bestMove.y,
            -1
        )

        nextTurn()
    }
}