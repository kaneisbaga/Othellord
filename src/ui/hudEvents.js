import {
    gameState
}
from '../core/gameState.js'

export function bindHudEvents(){

    document
    .getElementById('startBtn')
    ?.addEventListener(
        'click',
        () => {

            sessionStorage.setItem(
                'start-game',
                'true'
            )

            location.reload()
        }
    )

    document
    .getElementById('restartBtn')
    ?.addEventListener(
        'click',
        () => {

            location.reload()
        }
    )

    document
    .getElementById('nextGameBtn')
    ?.addEventListener(
        'click',
        () => {

            if(
                gameState.winner &&
                gameState.winner.includes('玩家')
            ){

                gameState.stage++

                localStorage.setItem(
                    'boss-stage',
                    gameState.stage
                )

                localStorage.setItem(
                    'current-stage',
                    gameState.stage
                )
            }

            location.reload()
        }
    )
}