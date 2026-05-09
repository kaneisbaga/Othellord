import {
    gameState
}
from '../core/gameState.js'

import {
    isValidMove
}
from './rules.js'

export function getAIMove(player){

    const moves = []

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            if(
                isValidMove(
                    x,
                    y,
                    player
                )
            ){

                moves.push({x,y})
            }
        }
    }

    if(moves.length <= 0)
        return null

    // 角落優先

    const corners = [

        [0,0],
        [7,0],
        [0,7],
        [7,7]
    ]

    for(const move of moves){

        for(const [cx,cy] of corners){

            if(
                move.x === cx &&
                move.y === cy
            ){

                return move
            }
        }
    }

    return moves[
        Math.floor(
            Math.random() *
            moves.length
        )
    ]
}