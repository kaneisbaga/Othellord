export const gameState = {

    board: [],

    currentPlayer: 1,

    gameOver: false,

    winner: '',

    playerName: '玩家',

    bossLevel: 1,

    stage: 0,

    showHints: false,

    thinking:false,

    twoPlayerMode:

    localStorage.getItem(
        'two-player-mode'
    ) === 'true'
}