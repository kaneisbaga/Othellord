import {
    gameState
}
from '../core/gameState.js'

export function setupPlayerProfile(){

    const startGame =

    sessionStorage.getItem(
        'start-game'
    )

    if(!startGame){

        gameState.playerName =

        localStorage.getItem(
            'player-name'
        ) || '玩家'

        gameState.stage = Number(

            localStorage.getItem(
                'current-stage'
            ) || 0
        )

        return
    }

    sessionStorage.removeItem(
        'start-game'
    )

    let name = prompt(
        '請輸入玩家名稱'
    )

    if(!name)
        name = '玩家'

    localStorage.setItem(
        'player-name',
        name
    )

    gameState.playerName =
    name

    const saveKey =

    'boss-stage-' +
    playerName

    const unlocked = Number(

        localStorage.getItem(
            saveKey
        ) || 0
    )

    let level = 1

    if(unlocked >= 1){

        const selected = prompt(

            '選擇開始等級\nLV1 ~ LV' +

            (unlocked + 1)
        )

        level = Number(selected)

        if(isNaN(level))
            level = 1

        if(level <= 0)
            level = 1

        if(level > unlocked + 1){

            level =
            unlocked + 1
        }
    }

    gameState.stage =
    level - 1

    localStorage.setItem(
        'current-stage',
        gameState.stage
    )
}