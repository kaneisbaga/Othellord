import { gameState }
from '../core/gameState.js'

export function createBoard(){

    gameState.board = []

    for(let y=0;y<8;y++){

        const row = []

        for(let x=0;x<8;x++){

            row.push(0)
        }

        gameState.board.push(row)
    }

    gameState.board[3][3] = -1
    gameState.board[4][4] = -1
    gameState.board[3][4] = 1
    gameState.board[4][3] = 1
}