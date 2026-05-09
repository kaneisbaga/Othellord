export function createBackgroundFX(){

    const bg =
    document.createElement('div')

    bg.className =
    'background-fx'

    document.body.appendChild(bg)

    for(let i=0;i<80;i++){

        const star =
        document.createElement('div')

        star.className = 'star'

        star.style.left =
        Math.random()*100 + '%'

        star.style.top =
        Math.random()*100 + '%'

        star.style.animationDelay =
        Math.random()*5 + 's'

        bg.appendChild(star)
    }
}