import { gameState }
from '../core/gameState.js'

export const skills = {

    attackBoost:false,

    comboMaster:false,

    criticalBoost:false
}

export function unlockSkill(name){

    if(
        gameState.skillPoints <= 0
    ) return

    if(skills[name]) return

    skills[name] = true

    gameState.skillPoints--

    if(name === 'attackBoost'){

        gameState.attackBonus += 5
    }

    if(name === 'criticalBoost'){

        gameState.critRate += 0.1
    }

    alert(
        '✨ 解鎖技能：' + name
    )
}