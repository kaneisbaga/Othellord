import { gameState }
from './gameState.js'

export function saveGame(){

    localStorage.setItem(

        'magic-save',

        JSON.stringify(gameState)
    )
}

export function loadGame(){

    const data =
    localStorage.getItem(
        'magic-save'
    )

    if(!data)
        return null

    return JSON.parse(data)
}