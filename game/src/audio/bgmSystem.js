let bgm = null

export function initBGM(){

    bgm = new Audio(
        '/audio/chaos.mp3'
    )

    bgm.loop = true

    bgm.volume = 0.28

    const startMusic = () => {

        bgm.play()

        window.removeEventListener(
            'click',
            startMusic
        )
    }

    window.addEventListener(
        'click',
        startMusic
    )
}

export function setBGMVolume(v){

    if(!bgm) return

    bgm.volume = v
}

export function toggleBGM(){

    if(!bgm) return

    if(bgm.paused){

        bgm.play()

    }else{

        bgm.pause()
    }
}