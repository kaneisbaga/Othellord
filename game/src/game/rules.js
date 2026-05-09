import {
    gameState
}
from '../core/gameState.js'

const dirs = [

[-1,-1],[0,-1],[1,-1],
[-1,0],         [1,0],
[-1,1], [0,1], [1,1]

]

export function isInside(x,y){

    return (
        x >= 0 &&
        y >= 0 &&
        x < 8 &&
        y < 8
    )
}

export function isValidMove(x,y,player){

    if(gameState.board[y][x] !== 0)
        return false

    for(const [dx,dy] of dirs){

        let cx = x + dx
        let cy = y + dy

        let foundEnemy = false

        while(isInside(cx,cy)){

            const v =
            gameState.board[cy][cx]

            if(v === -player){

                foundEnemy = true
            }

            else if(v === player){

                if(foundEnemy)
                    return true

                break
            }

            else{

                break
            }

            cx += dx
            cy += dy
        }
    }

    return false
}

export function flipPieces(x,y,player){

    for(const [dx,dy] of dirs){

        const flips = []

        let cx = x + dx
        let cy = y + dy

        while(isInside(cx,cy)){

            const v =
            gameState.board[cy][cx]

            if(v === -player){

                flips.push([cx,cy])
            }

            else if(v === player){

                for(const [fx,fy] of flips){

                    gameState.board[fy][fx] =
                    player
                }

                break
            }

            else{

                break
            }

            cx += dx
            cy += dy
        }
    }
}

export function applyMove(x,y,player){

    if(
        !isValidMove(
            x,
            y,
            player
        )
    ){
        return false
    }

    gameState.board[y][x] =
    player

    flipPieces(
        x,
        y,
        player
    )

    return true
}

export function hasValidMove(player){

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            if(
                isValidMove(
                    x,
                    y,
                    player
                )
            ){
                return true
            }
        }
    }

    return false
}

export function countWinner(){

    let black = 0
    let white = 0

    for(let y=0;y<8;y++){

        for(let x=0;x<8;x++){

            const v =
            gameState.board[y][x]

            if(v === 1)
                black++

            if(v === -1)
                white++
        }
    }

    if(black > white){

        return '🎉 玩家勝利'
    }

    if(white > black){

        return '👹 BOSS勝利'
    }

    return '⚖ 平手'
}