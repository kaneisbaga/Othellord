export function openHelpModal(){

    let modal =
    document.querySelector('#helpModal')

    if(modal){

        modal.style.display = 'flex'
        return
    }

    modal =
    document.createElement('div')

    modal.id = 'helpModal'

    modal.innerHTML = `

    <div class="help-content">

        <h1>
        🎮 黑白棋 BOSS戰 遊戲說明
        </h1>

        <div class="help-scroll">

        <h2>📌 遊戲目標</h2>

        <p>
        讓自己的棋子數量超過對手。
        </p>

        <p>
        黑棋先手，白棋後手。
        </p>

        <p>
        當棋盤全部填滿，
        或雙方都沒有地方可以下棋時，
        遊戲結束。
        </p>

        <h2>⚫ 黑棋與⚪白棋</h2>

        <p>
        黑棋先下。
        </p>

        <p>
        白棋後下。
        </p>

        <p>
        玩家需要夾住敵方棋子，
        才能翻轉對方棋子。
        </p>

        <h2>🔄 翻棋規則</h2>

        <p>
        只要你的棋子，
        從直線方向夾住敵人，
        中間所有棋子都會翻面。
        </p>

        <p>
        可以從：
        </p>

        <ul>
            <li>⬅ 左右</li>
            <li>⬆ 上下</li>
            <li>↖↗↘↙ 斜角</li>
        </ul>

        <h2>🔵 引導點</h2>

        <p>
        藍色點點代表：
        </p>

        <p>
        目前可以下棋的位置。
        </p>

        <h2>👹 BOSS模式</h2>

        <p>
        白棋由 AI 控制。
        </p>

        <p>
        每個 BOSS 都有不同難度。
        </p>

        <p>
        打贏才能進下一關。
        </p>

        <h2>👥 雙人模式</h2>

        <p>
        黑白雙方都由真人操作。
        </p>

        <p>
        很適合朋友對戰。
        </p>

        <h2>🏆 勝利條件</h2>

        <p>
        遊戲結束時：
        </p>

        <ul>
            <li>棋子比較多的人獲勝</li>
            <li>數量相同則平手</li>
        </ul>

        <h2>🧠 新手技巧</h2>

        <ul>

            <li>
            優先搶角落！
            </li>

            <li>
            不要太早搶邊。
            </li>

            <li>
            盡量保留行動空間。
            </li>

            <li>
            小心送對手角落。
            </li>

        </ul>

        <h2>🎯 小提醒</h2>

        <p>
        有時候棋子少不代表輸，
        後期一次大翻盤很常見！
        </p>

        </div>

        <button id="closeHelpBtn">

        關閉說明

        </button>

    </div>
    `

    document.body.appendChild(modal)

    document
    .getElementById(
        'closeHelpBtn'
    )
    .onclick = () => {

        modal.style.display = 'none'
    }
}