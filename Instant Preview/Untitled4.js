document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const output = document.getElementById('output');
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    const saveBtn = document.getElementById('save');
    const loadBtn = document.getElementById('load');
    const templateSelector = document.getElementById('template-selector');

    const updateOutput = () => {
        const html = htmlCode.value;
        const css = `<style>${cssCode.value}</style>`;
        const js = `<script>${jsCode.value}<\/script>`;
        const srcDoc = `${html}${css}${js}`;
        output.srcdoc = srcDoc;
    };

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    const saveCode = () => {
        localStorage.setItem('htmlCode', htmlCode.value);
        localStorage.setItem('cssCode', cssCode.value);
        localStorage.setItem('jsCode', jsCode.value);
    };

    const loadCode = () => {
        htmlCode.value = localStorage.getItem('htmlCode') || '';
        cssCode.value = localStorage.getItem('cssCode') || '';
        jsCode.value = localStorage.getItem('jsCode') || '';
        updateOutput();
    };

    const loadTemplate = (template) => {
        switch (template) {
            case 'example1':
                htmlCode.value = '<h1>Hello World</h1>';
                cssCode.value = 'h1 { color: red; }';
                jsCode.value = '';
                break;
            case 'example2':
                htmlCode.value = '<button id="btn">Click me</button>';
                cssCode.value = '#btn { padding: 10px 20px; font-size: 16px; }';
                jsCode.value = 'document.getElementById("btn").addEventListener("click", () => alert("Button clicked!"));';
                break;
            case 'example3':
                htmlCode.value = '<div id="box"></div>';
                cssCode.value = '#box { width: 100px; height: 100px; background-color: blue; }';
                jsCode.value = 'document.getElementById("box").addEventListener("click", () => { const box = document.getElementById("box"); box.style.backgroundColor = box.style.backgroundColor === "blue" ? "green" : "blue"; });';
                break;
            case 'example4':
                htmlCode.value = '<form id="form"><input type="text" id="input" placeholder="Type something"><button type="submit">Submit</button></form><p id="output"></p>';
                cssCode.value = '#form { display: flex; gap: 10px; } #output { margin-top: 10px; }';
                jsCode.value = 'document.getElementById("form").addEventListener("submit", (e) => { e.preventDefault(); const input = document.getElementById("input").value; document.getElementById("output").innerText = input; });';
                break;
            case 'example5':
                htmlCode.value = '<div id="circle"></div>';
                cssCode.value = '#circle { width: 100px; height: 100px; border-radius: 50%; background-color: purple; position: relative; animation: move 2s infinite alternate; } @keyframes move { 0% { top: 0; } 100% { top: 200px; } }';
                jsCode.value = '';
                break;
            case 'example6':
                htmlCode.value = '<ul id="list"></ul><button id="add">Add Item</button>';
                cssCode.value = '#list { list-style-type: none; padding: 0; } #list li { padding: 5px 10px; background-color: #eee; margin: 5px 0; } #add { margin-top: 10px; }';
                jsCode.value = 'document.getElementById("add").addEventListener("click", () => { const li = document.createElement("li"); li.textContent = `Item ${document.querySelectorAll("#list li").length + 1}`; document.getElementById("list").appendChild(li); });';
                break;
            case 'example7':
                htmlCode.value = '<div id="container"><div class="box"></div><div class="box"></div><div class="box"></div></div>';
                cssCode.value = '#container { display: flex; justify-content: space-around; } .box { width: 100px; height: 100px; background-color: teal; }';
                jsCode.value = '';
                break;
            case 'example8':
                htmlCode.value = '<input type="text" id="filter" placeholder="Type to filter..."><ul id="items"><li>Apple</li><li>Banana</li><li>Cherry</li><li>Date</li><li>Elderberry</li></ul>';
                cssCode.value = '#items { list-style-type: none; padding: 0; } #items li { padding: 5px 0; }';
                jsCode.value = 'document.getElementById("filter").addEventListener("input", (e) => { const filter = e.target.value.toLowerCase(); document.querySelectorAll("#items li").forEach(li => { li.style.display = li.textContent.toLowerCase().includes(filter) ? "" : "none"; }); });';
                break;
            case 'example9':
                htmlCode.value = '<div id="modal"><p>This is a modal!</p><button id="close">Close</button></div><button id="open">Open Modal</button>';
                cssCode.value = '#modal { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background-color: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }';
                jsCode.value = 'document.getElementById("open").addEventListener("click", () => { document.getElementById("modal").style.display = "block"; }); document.getElementById("close").addEventListener("click", () => { document.getElementById("modal").style.display = "none"; });';
                break;
            case 'example10':
                htmlCode.value = '<canvas id="snake-game" width="400" height="400"></canvas>';
                cssCode.value = '#snake-game { border: 1px solid black; }';
                jsCode.value = 'const canvas = document.getElementById("snake-game"); const ctx = canvas.getContext("2d"); let snake = [{ x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 }, { x: 110, y: 150 }]; let dx = 10; let dy = 0; let foodX; let foodY; let changingDirection = false; let score = 0; const main = () => { if (didGameEnd()) return; setTimeout(() => { changingDirection = false; clearCanvas(); drawFood(); advanceSnake(); drawSnake(); main(); }, 100); }; const clearCanvas = () => { ctx.fillStyle = "white"; ctx.strokeStyle = "black"; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.strokeRect(0, 0, canvas.width, canvas.height); }; const drawSnake = () => { snake.forEach(drawSnakePart); }; const advanceSnake = () => { const head = { x: snake[0].x + dx, y: snake[0].y + dy }; snake.unshift(head); const didEatFood = snake[0].x === foodX && snake[0].y === foodY; if (didEatFood) { score += 10; document.getElementById("score").innerHTML = score; createFood(); } else { snake.pop(); } }; const drawSnakePart = (snakePart) => { ctx.fillStyle = "lightgreen"; ctx.strokeStyle = "darkgreen"; ctx.fillRect(snakePart.x, snakePart.y, 10, 10); ctx.strokeRect(snakePart.x, snakePart.y, 10, 10); }; const createFood = () => { foodX = randomTen(0, canvas.width - 10); foodY = randomTen(0, canvas.height - 10); snake.forEach(part => { const hasEaten = part.x === foodX && part.y === foodY; if (hasEaten) createFood(); }); }; const drawFood = () => { ctx.fillStyle = "red"; ctx.strokeStyle = "darkred"; ctx.fillRect(foodX, foodY, 10, 10); ctx.strokeRect(foodX, foodY, 10, 10); }; const randomTen = (min, max) => { return Math.round((Math.random() * (max - min) + min) / 10) * 10; }; const changeDirection = (event) => { const LEFT_KEY = 37; const RIGHT_KEY = 39; const UP_KEY = 38; const DOWN_KEY = 40; if (changingDirection) return; changingDirection = true; const keyPressed = event.keyCode; const goingUp = dy === -10; const goingDown = dy === 10; const goingRight = dx === 10; const goingLeft = dx === -10; if (keyPressed === LEFT_KEY && !goingRight) { dx = -10; dy = 0; } if (keyPressed === UP_KEY && !goingDown) { dx = 0; dy = -10; } if (keyPressed === RIGHT_KEY && !goingLeft) { dx = 10; dy = 0; } if (keyPressed === DOWN_KEY && !goingUp) { dx = 0; dy = 10; } }; const didGameEnd = () => { for (let i = 4; i < snake.length; i++) { const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y; if (didCollide) return true; } const hitLeftWall = snake[0].x < 0; const hitRightWall = snake[0].x > canvas.width - 10; const hitToptWall = snake[0].y < 0; const hitBottomWall = snake[0].y > canvas.height - 10; return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall; }; document.addEventListener("keydown", changeDirection); createFood(); main();';
                break;
            default:
                htmlCode.value = '';
                cssCode.value = '';
                jsCode.value = '';
                break;
        }
        updateOutput();
    };

    htmlCode.addEventListener('input', updateOutput);
    cssCode.addEventListener('input', updateOutput);
    jsCode.addEventListener('input', updateOutput);
    toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
    saveBtn.addEventListener('click', saveCode);
    loadBtn.addEventListener('click', loadCode);
    templateSelector.addEventListener('change', (e) => loadTemplate(e.target.value));
});
