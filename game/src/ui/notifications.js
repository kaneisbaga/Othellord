export function notify(text){

    const div =
    document.createElement('div')

    div.className =
    'notify'

    div.innerText = text

    document.body.appendChild(div)

    setTimeout(() => {

        div.remove()

    },2000)
}