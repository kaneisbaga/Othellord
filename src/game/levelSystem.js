import { gameState }
from '../core/gameState.js'

export function gainExp(amount){

    gameState.exp =
    (gameState.exp || 0) + amount

    const need =
    gameState.level * 100

    if(gameState.exp >= need){

        gameState.exp -= need

        gameState.level++

        gameState.playerHp += 20

        gameState.maxHp += 20

        alert(
            '🎉 升級 Lv.' +
            gameState.level
        )
    }
}