import { config }
from '../core/config.js'

export function createSettingsMenu(){

    const menu =
    document.createElement('div')

    menu.className =
    'settings-menu'

    menu.innerHTML = `

    <div class="settings-card">

        <h2>設定</h2>

        <label>

            音量

            <input
            id="volumeSlider"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value="${config.volume}"
            />

        </label>

        <button id="closeSettings">

            關閉

        </button>

    </div>

    `

    document.body.appendChild(menu)

    document
    .getElementById('volumeSlider')
    ?.addEventListener(

        'input',

        e => {

            config.volume =
            Number(e.target.value)
        }
    )

    document
    .getElementById('closeSettings')
    ?.addEventListener(

        'click',

        () => {

            menu.remove()
        }
    )
}