export const storyScenes = [

    {

        title:'第一章',

        text:'熔岩巨龍甦醒了...'
    },

    {

        title:'第二章',

        text:'深淵魔眼正在侵蝕世界...'
    },

    {

        title:'第三章',

        text:'機械核心開始暴走...'
    }
]

export function playStory(index){

    const scene =
    storyScenes[index]

    if(!scene) return

    alert(

        scene.title +
        '\n\n' +
        scene.text
    )
}