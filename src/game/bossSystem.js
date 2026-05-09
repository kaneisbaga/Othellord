import { gameState }
from '../core/gameState.js'

export const bosses = [

    {
        name:'🔥 熔岩巨龍',
        hp:120
    },

    {
        name:'👁 深淵魔眼',
        hp:180
    },

    {
        name:'⚙ 機械核心',
        hp:240
    }
]

export function initBoss(){

    gameState.bossIndex =
    gameState.bossIndex || 0

    const boss =
    bosses[
        gameState.bossIndex
    ]

    gameState.bossName =
    boss.name

    gameState.bossHp =
    boss.hp

    gameState.bossMaxHp =
    boss.hp
}

export function damageBoss(amount){

    gameState.bossHp -= amount

    if(gameState.bossHp < 0){

        gameState.bossHp = 0
    }

    if(gameState.bossHp <= 0){

        gameState.bossIndex++

        if(
            gameState.bossIndex >=
            bosses.length
        ){

            gameState.gameOver = true

            gameState.winner =
            '玩家征服全部Boss'

            return
        }

        initBoss()
    }
}