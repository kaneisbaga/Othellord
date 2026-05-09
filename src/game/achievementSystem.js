export function getAchievement(data){

    const achievements = []

    if(data.result === 'WIN'){

        achievements.push(
            '🏆 完成一場勝利'
        )
    }

    if(data.bossLevel >= 5){

        achievements.push(
            '⚔ 擊敗高級BOSS'
        )
    }

    if(data.pieces >= 40){

        achievements.push(
            '💥 壓制勝利'
        )
    }

    return achievements
}