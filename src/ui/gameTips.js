const tips = [

'💡 角落是最重要的位置。',

'💡 不要太早搶邊線。',

'💡 中後期再大量翻棋。',

'💡 觀察 BOSS 下一步可能的位置。',

'💡 有時候少翻棋反而更強。'
]

export function createTips(){

    const tip =
    document.createElement('div')

    tip.className =
    'tips-box'

    let index = 0

    tip.innerText =
    tips[index]

    setInterval(() => {

        index++

        if(index >= tips.length){

            index = 0
        }

        tip.innerText =
        tips[index]

    },5000)

    document.body.appendChild(tip)
}