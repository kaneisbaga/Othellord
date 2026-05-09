import { gameState }
from '../core/gameState.js'

export function activateBossPhase2(){

    if(
        gameState.bossPhase >= 2
    ) return

    if(
        gameState.bossHp >
        gameState.bossMaxHp * .3
    ) return

    gameState.bossPhase = 2

    document.body.classList.add(
        'ultimate-rage'
    )

    alert(
        '🔥 Boss 第二型態！'
    )
}

export function bossUltimateAttack(){

    gameState.playerHp -= 30

    if(
        gameState.playerHp < 0
    ){

        gameState.playerHp = 0
    }

    alert(
        '💀 終焉殞滅 -30HP'
    )
}