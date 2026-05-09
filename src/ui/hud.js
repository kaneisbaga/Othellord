import {
    gameState
}
from '../core/gameState.js'

import {
    openHelpModal
}
from './helpModal.js'

export function updateHUD(){

    const panel =
    document.querySelector('.panel')

    if(!panel)
        return

    panel.innerHTML = `

    <h2>
    🎮 黑白棋 V3
    </h2>

    <p>

    ${

        gameState.twoPlayerMode

        ? '👥 雙人模式'

        : '👹 BOSS模式'
    }

    </p>

    <p>

    ${

        gameState.currentPlayer === 1

        ? '⚫ 黑棋回合'

        : '⚪ 白棋回合'
    }

    </p>

    <button id="modeBtn">

    ${

        gameState.twoPlayerMode

        ? '👹 切換BOSS模式'

        : '👥 切換雙人模式'
    }

    </button>

    <button id="helpBtn">

    📖 遊戲說明

    </button>

    <button id="restartBtn">

    🔄 重新開始

    </button>

    <div class="winner">

    ${

        gameState.gameOver

        ? gameState.winner

        : ''
    }

    </div>
    `

    bindEvents()
}

function bindEvents(){

    document
    .getElementById(
        'modeBtn'
    )
    ?.addEventListener(
        'click',
        () => {

            const nextMode =

            !gameState.twoPlayerMode

            localStorage.setItem(
                'two-player-mode',
                nextMode
            )

            location.reload()
        }
    )

    document
    .getElementById(
        'helpBtn'
    )
    ?.addEventListener(
        'click',
        () => {

            openHelpModal()
        }
    )

    document
    .getElementById(
        'restartBtn'
    )
    ?.addEventListener(
        'click',
        () => {

            location.reload()
        }
    )
}