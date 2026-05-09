export function showLoading(callback){

    const loading =
    document.createElement('div')

    loading.className =
    'loading-screen'

    loading.innerHTML = `

    <div class="loading-logo">

        魔能戰域

    </div>

    <div class="loading-bar">

        <div class="loading-fill"></div>

    </div>

    `

    document.body.appendChild(loading)

    setTimeout(() => {

        loading.remove()

        callback()

    },1200)
}