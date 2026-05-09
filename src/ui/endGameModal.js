import {
    playSound
}
from '../audio/audioSystem.js'

export function showEndGame(winner){

    const old =
    document.querySelector(
        '.endgame-overlay'
    )

    if(old) old.remove()

    const overlay =
    document.createElement('div')

    overlay.className =
    'endgame-overlay'

    overlay.innerHTML = `

    <div class="endgame-card">

        <h1>

            🏆 遊戲結束

        </h1>

        <h2>

            ${winner}

        </h2>

        <button id="restartGameBtn">

            🔄 再玩一次

        </button>

    </div>

    `

    document.body.appendChild(
        overlay
    )

    playSound('victory')

    document
    .getElementById(
        'restartGameBtn'
    )
    ?.addEventListener(

        'click',

        () => {

            location.reload()
        }
    )
}