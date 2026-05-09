export function flashBoard(){

    const board =
    document.getElementById('board')

    board.classList.add('flash')

    setTimeout(() => {

        board.classList.remove('flash')

    },300)
}

export function shakeBoard(){

    const board =
    document.getElementById('board')

    board.classList.add('shake')

    setTimeout(() => {

        board.classList.remove('shake')

    },300)
}