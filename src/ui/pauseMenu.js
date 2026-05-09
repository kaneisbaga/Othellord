export function createPauseMenu(){

    const pause =
    document.createElement('div')

    pause.className =
    'pause-menu hidden'

    pause.innerHTML = `

    <div class="pause-card">

        <h1>暫停中</h1>

        <button id="resumeBtn">
            繼續遊戲
        </button>

        <button id="backMenuBtn">
            返回主選單
        </button>

    </div>

    `

    document.body.appendChild(pause)

    window.addEventListener(

        'keydown',

        e => {

            if(e.key === 'Escape'){

                pause.classList.toggle(
                    'hidden'
                )
            }
        }
    )

    document
    .getElementById('resumeBtn')
    ?.addEventListener(

        'click',

        () => {

            pause.classList.add(
                'hidden'
            )
        }
    )

    document
    .getElementById('backMenuBtn')
    ?.addEventListener(

        'click',

        () => {

            location.reload()
        }
    )
}