export function createMainMenu(startGame){

    const menu =
    document.createElement('div')

    menu.className =
    'main-menu'

    menu.innerHTML = `

    <div class="menu-card">

        <h1 class="menu-logo">
            魔能戰域
        </h1>

        <button id="startBtn">
            開始遊戲
        </button>

        <button id="helpBtn">
            遊戲說明
        </button>

        <button id="fullscreenBtn">
            全螢幕
        </button>

    </div>

    `

    document.body.appendChild(menu)

    document
    .getElementById('startBtn')
    ?.addEventListener(

        'click',

        () => {

            menu.remove()

            startGame()
        }
    )

    document
    .getElementById('helpBtn')
    ?.addEventListener(

        'click',

        () => {

            alert(
                '目標：\n\n' +
                '翻轉更多棋子並擊敗BOSS'
            )
        }
    )

    document
    .getElementById('fullscreenBtn')
    ?.addEventListener(

        'click',

        async () => {

            if(!document.fullscreenElement){

                await document
                .documentElement
                .requestFullscreen()

            }else{

                await document
                .exitFullscreen()
            }
        }
    )
}