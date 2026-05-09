import {
    gameState
}
from '../core/gameState.js'

import {
    isValidMove
}
from '../game/rules.js'

import {
    playerMove
}
from '../core/gameLoop.js'

export function renderBoard(){

    const board =
    document.querySelector('#board')

    if(!board)
        return

    board.innerHTML = ''

    document.body.classList.remove(
        'black-turn',
        'white-turn'
    )

    document.body.classList.add(

        gameState.currentPlayer === 1

        ? 'black-turn'

        : 'white-turn'
    )

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            const cell =
            document.createElement('div')

            cell.className = 'cell'

            const value =
            gameState.board[y][x]

            if(value !== 0){

                const piece =
                document.createElement('div')

                piece.className =

                value === 1

                ? 'piece black'

                : 'piece white'

                cell.appendChild(piece)
            }

            const hintPlayer =

            gameState.twoPlayerMode

            ? gameState.currentPlayer

            : 1

            const valid =
            isValidMove(
                x,
                y,
                hintPlayer
            )

            if(
                gameState.showHints &&
                valid
            ){

                const hint =
                document.createElement('div')

                hint.className =
                'hint'

                cell.appendChild(hint)
            }

            cell.addEventListener(
                'click',
                () => {

                    if(gameState.gameOver)
                        return

                    playerMove(x,y)
                }
            )

            board.appendChild(cell)
        }
    }
}