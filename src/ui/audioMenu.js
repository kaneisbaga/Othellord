import {
    setBGMVolume,
    toggleBGM
}
from '../audio/bgmSystem.js'

export function createAudioMenu(){

    const audioPanel =
    document.createElement('div')

    audioPanel.className =
    'audio-panel'

    audioPanel.innerHTML = `

    <button id="musicToggleBtn">

        🎵 音樂開關

    </button>

    <input
        id="musicSlider"
        type="range"
        min="0"
        max="100"
        value="28"
    />

    `

    document.body.appendChild(
        audioPanel
    )

    document
    .getElementById(
        'musicToggleBtn'
    )
    ?.addEventListener(

        'click',

        () => {

            toggleBGM()
        }
    )

    document
    .getElementById(
        'musicSlider'
    )
    ?.addEventListener(

        'input',

        e => {

            setBGMVolume(
                e.target.value / 100
            )
        }
    )
}