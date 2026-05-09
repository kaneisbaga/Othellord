(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const r={board:[],currentPlayer:1,gameOver:!1,winner:"",playerName:"玩家",bossLevel:1,stage:0,thinking:!1,twoPlayerMode:localStorage.getItem("two-player-mode")==="true"};function S(){r.board=[];for(let e=0;e<8;e++){const t=[];for(let o=0;o<8;o++)t.push(0);r.board.push(t)}r.board[3][3]=-1,r.board[4][4]=-1,r.board[3][4]=1,r.board[4][3]=1}const p=[{level:1,name:"史萊姆"},{level:2,name:"黑狼"},{level:3,name:"魔王貓"},{level:4,name:"混沌棋士"},{level:5,name:"深淵領主"}];function w(){const e=p[r.stage]||p[p.length-1];r.bossLevel=e.level,r.bossName=e.name}const h=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function g(e,t){return e>=0&&t>=0&&e<8&&t<8}function f(e,t,o){if(r.board[t][e]!==0)return!1;for(const[l,n]of h){let i=e+l,a=t+n,c=!1;for(;g(i,a);){const d=r.board[a][i];if(d===-o)c=!0;else if(d===o){if(c)return!0;break}else break;i+=l,a+=n}}return!1}function B(e,t,o){for(const[l,n]of h){const i=[];let a=e+l,c=t+n;for(;g(a,c);){const d=r.board[c][a];if(d===-o)i.push([a,c]);else if(d===o){for(const[v,P]of i)r.board[P][v]=o;break}else break;a+=l,c+=n}}}function b(e,t,o){return f(e,t,o)?(r.board[t][e]=o,B(e,t,o),!0):!1}function y(e){for(let t=0;t<8;t++)for(let o=0;o<8;o++)if(f(o,t,e))return!0;return!1}function M(){let e=0,t=0;for(let o=0;o<8;o++)for(let l=0;l<8;l++){const n=r.board[o][l];n===1&&e++,n===-1&&t++}return e>t?"🎉 玩家勝利":t>e?"👹 BOSS勝利":"⚖ 平手"}function L(){let e=document.querySelector("#helpModal");if(e){e.style.display="flex";return}e=document.createElement("div"),e.id="helpModal",e.innerHTML=`

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
    `,document.body.appendChild(e),document.getElementById("closeHelpBtn").onclick=()=>{e.style.display="none"}}function s(){const e=document.querySelector(".panel");e&&(e.innerHTML=`

    <h2>
    🎮 黑白棋 V3
    </h2>

    <p>

    ${r.twoPlayerMode?"👥 雙人模式":"👹 BOSS模式"}

    </p>

    <p>

    ${r.currentPlayer===1?"⚫ 黑棋回合":"⚪ 白棋回合"}

    </p>

    <button id="modeBtn">

    ${r.twoPlayerMode?"👹 切換BOSS模式":"👥 切換雙人模式"}

    </button>

    <button id="helpBtn">

    📖 遊戲說明

    </button>

    <button id="restartBtn">

    🔄 重新開始

    </button>

    <div class="winner">

    ${r.gameOver?r.winner:""}

    </div>
    `,O())}function O(){document.getElementById("modeBtn")?.addEventListener("click",()=>{const e=!r.twoPlayerMode;localStorage.setItem("two-player-mode",e),location.reload()}),document.getElementById("helpBtn")?.addEventListener("click",()=>{L()}),document.getElementById("restartBtn")?.addEventListener("click",()=>{location.reload()})}function I(e){const t=[];for(let l=0;l<8;l++)for(let n=0;n<8;n++)f(n,l,e)&&t.push({x:n,y:l});if(t.length<=0)return null;const o=[[0,0],[7,0],[0,7],[7,7]];for(const l of t)for(const[n,i]of o)if(l.x===n&&l.y===i)return l;return t[Math.floor(Math.random()*t.length)]}async function k(e,t){r.gameOver||!b(e,t,r.currentPlayer)||(r.currentPlayer*=-1,u(),s(),await m())}async function m(){if(u(),s(),!r.gameOver){if(!y(r.currentPlayer)){r.currentPlayer*=-1,u(),s(),y(r.currentPlayer)||N();return}r.twoPlayerMode||r.currentPlayer===-1&&await E()}}async function E(){r.thinking=!0,u(),s(),await x(1200);const e=I(-1);e&&b(e.x,e.y,-1),r.currentPlayer=1,r.thinking=!1,u(),s(),await m()}function N(){r.gameOver=!0,r.winner=M(),u(),s()}function x(e){return new Promise(t=>setTimeout(t,e))}function u(){const e=document.querySelector("#board");if(e){e.innerHTML="",document.body.classList.remove("black-turn","white-turn"),document.body.classList.add(r.currentPlayer===1?"black-turn":"white-turn");for(let t=0;t<8;t++)for(let o=0;o<8;o++){const l=document.createElement("div");l.className="cell";const n=r.board[t][o];if(n!==0){const a=document.createElement("div");a.className=n===1?"piece black":"piece white",l.appendChild(a)}const i=r.twoPlayerMode?r.currentPlayer:1;f(o,t,i),l.addEventListener("click",()=>{r.gameOver||k(o,t)}),e.appendChild(l)}}}function H(){const e=sessionStorage.getItem("start-game");if(r.playerName=localStorage.getItem("player-name")||"玩家",r.stage=Number(localStorage.getItem("current-stage")||0),!e)return;sessionStorage.removeItem("start-game");let t=prompt("請輸入玩家名稱");t||(t="玩家"),r.playerName=t,localStorage.setItem("player-name",t);const o="boss-stage-"+t,l=Number(localStorage.getItem(o)||0);let n=1;if(l>=1){const i=prompt(`選擇開始等級
LV1 ~ LV`+(l+1));n=Number(i),isNaN(n)&&(n=1),n<=0&&(n=1),n>l+1&&(n=l+1)}r.stage=n-1,localStorage.setItem("current-stage",r.stage)}function T(){H(),w(),S(),u(),s(),m()}T();
