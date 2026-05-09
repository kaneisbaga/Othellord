export function spawnParticle(x,y){

    const p =
    document.createElement('div')

    p.className =
    'particle'

    p.style.left =
    x + 'px'

    p.style.top =
    y + 'px'

    document.body.appendChild(p)

    setTimeout(() => {

        p.remove()

    },600)
}