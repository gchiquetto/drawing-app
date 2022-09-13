const color = document.querySelector('.color-picker');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const sizeDisplay = document.querySelector('.size');


const canvas = document.querySelector('canvas');
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight = canvasOffsetY;



let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

let size = 10;



canvas.addEventListener('click', e => {
    draw(e);
})

btnPlus.addEventListener('click', () => {
    size <= 50 && size++;
    sizeDisplay.textContent = size;

});

btnMinus.addEventListener('click', () => {
    size >= 0 && (size--);
    sizeDisplay.textContent = size;

});

function draw(event){
    const x = event.clientX;
    const y = event.clientY;

    if(canvas.getContext){
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0,0, canvas.width, canvas.height)

        ctx.beginPath();
        ctx.lineTo(x, y)
    }

    console.log(x, y);

}


