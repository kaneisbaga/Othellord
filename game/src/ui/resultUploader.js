import {
    gameState
}
from '../core/gameState.js'

import {
    countPieces
}
from '../game/rules.js'

import {
    uploadBattleRecord
}
from '../network/googleSheetAPI.js'

import {
    getAchievement
}
from '../game/achievementSystem.js'

let uploaded = false

export async function uploadResult(){

    if(uploaded)
        return

    if(!gameState.gameOver)
        return

    uploaded = true

    const pieces =
    countPieces()

    const playerName =

    localStorage.getItem(
        'player-name'
    ) || '玩家'

    const result =

    gameState.winner.includes('玩家')

    ? 'WIN'

    : 'LOSE'

    const data = {

        player:playerName,

        bossLevel:
        gameState.bossLevel,

        result,

        pieces:
        pieces.black,

        aiLevel:
        gameState.autoPlayLevel
    }

    const achievements =
    getAchievement(data)

    console.log(
        '🏅 ACHIEVEMENTS:',
        achievements
    )

    await uploadBattleRecord(data)
}