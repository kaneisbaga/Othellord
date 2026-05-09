import { gameState }
from '../core/gameState.js'

export function useBombSkill(x,y){

    let total = 0

    for(let dy=-1;dy<=1;dy++){

        for(let dx=-1;dx<=1;dx++){

            const nx = x + dx
            const ny = y + dy

            if(
                nx >= 0 &&
                ny >= 0 &&
                nx < 8 &&
                ny < 8
            ){

                if(
                    gameState.board[ny][nx] === -1
                ){

                    gameState.board[ny][nx] = 1

                    total++
                }
            }
        }
    }

    return total
}