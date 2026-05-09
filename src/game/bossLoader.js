import {
    gameState
}
from '../core/gameState.js'

import {
    bossLevels
}
from './bossLevels.js'

export function loadBoss(){

    const data =

    bossLevels[
        gameState.stage
    ] ||

    bossLevels[
        bossLevels.length - 1
    ]

    gameState.bossLevel =
    data.level

    gameState.bossName =
    data.name
}