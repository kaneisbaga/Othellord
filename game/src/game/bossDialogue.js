import { gameState }
from '../core/gameState.js'

const bossLines = {

    1:[
        '😵 我今天還在學習...',
        '😵 你看起來很厲害！'
    ],

    2:[
        '🐢 慢慢來，不用急。',
        '🐢 思考比速度更重要。'
    ],

    3:[
        '🦊 小心我的陷阱～',
        '🦊 但你一定辦得到！'
    ],

    4:[
        '🧠 開始真正動腦吧！',
        '🧠 觀察邊線很重要。'
    ],

    5:[
        '⚔ 你越來越強了。',
        '⚔ 試著保護角落！'
    ],

    6:[
        '🔥 哇！你居然到這裡了！'
    ],

    7:[
        '👁 我正在觀察你的策略。'
    ],

    8:[
        '⚙ 每一步都很重要。'
    ],

    9:[
        '👑 你已經接近高手了。'
    ],

    10:[
        '💀 最後的挑戰開始。'
    ]
}

export function getBossLine(){

    const lv =
    gameState.bossLevel || 1

    const list =
    bossLines[lv] || []

    if(list.length <= 0)
        return ''

    return list[
        Math.floor(
            Math.random() *
            list.length
        )
    ]
}