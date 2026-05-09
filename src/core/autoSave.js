import { gameState }
from './gameState.js'

export function autoSave(){

    localStorage.setItem(

        'ultimate-save',

        JSON.stringify(gameState)
    )
}

export function loadAutoSave(){

    const data =

        localStorage.getItem(
            'ultimate-save'
        )

    if(!data) return null

    return JSON.parse(data)
}