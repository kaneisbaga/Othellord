import {
    createBoard
}
from '../game/board.js'

import {
    loadBoss
}
from '../game/bossLoader.js'

import {
    renderBoard
}
from '../ui/renderBoard.js'

import {
    updateHUD
}
from '../ui/hud.js'

import {
    setupPlayerProfile
}
from '../ui/playerProfile.js'

import {
    nextTurn
}
from './gameLoop.js'

export function bootstrap(){

    setupPlayerProfile()

    loadBoss()

    createBoard()

    renderBoard()

    updateHUD()

    nextTurn()
}