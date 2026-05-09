export function createMainMenu(){

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

        <button id="bossRushBtn">
            Boss Rush
        </button>

        <button id="endlessBtn">
            無盡模式
        </button>

        <button id="settingsBtn">
            設定
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
        }
    )
}