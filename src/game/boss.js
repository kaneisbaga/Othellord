import { gameState }
from '../core/gameState.js'

export function bossAttack(){

    if(gameState.gameOver)
        return

    gameState.playerHp -= 10

    if(gameState.playerHp <= 0){

        gameState.playerHp = 0

        gameState.gameOver = true

        gameState.winner = 'BOSS'
    }
}