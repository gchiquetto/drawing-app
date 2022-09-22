const color = document.querySelector('.color-picker');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const sizeDisplay = document.querySelector('.size');
const btnClose = document.querySelector('.clear');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
let isPressed = false;
let size = 10;
let x;
let y;
let currentColor = color.value;

canvas.addEventListener('mousedown', e =>{
    isPressed = true;
    x= e.offsetX;
    y= e.offsetY;
    console.log(x, y);
});

canvas.addEventListener('mouseup', e => {
    isPressed = false;
    x = undefined;
    y = undefined;
    console.log(isPressed)
});

canvas.addEventListener('mousemove', e => {
    if (isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        console.log(x, y);
        drawCircle(x2, y2, currentColor, size);
        drawLine(x, y, x2, y2, currentColor, size);
        x = x2;
        y = y2;
    }
});

color.addEventListener('input', ()=> {
    currentColor = color.value;
});

function drawCircle(x, y, c, s){
    ctx.beginPath();
    ctx.arc(x, y, +s, 0, Math.PI*2);
    ctx.fillStyle = c;
    ctx.strokeStyle= c;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2, color, s){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = +s*2;
    ctx.stroke();
}

btnPlus.addEventListener('click', () => {
    size <= 50 && size++;
    sizeDisplay.textContent = size;

});

btnMinus.addEventListener('click', () => {
    size >= 0 && (size--);
    sizeDisplay.textContent = size;

});

btnClose.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('ss')
});