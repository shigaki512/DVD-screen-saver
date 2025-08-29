const container = document.querySelector('.container');
const text = document.querySelector('.bouncing-text');

let x = 0, y = 0;
let dx = 2, dy = 1.5; // 速度 

function animate() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const textWidth = text.offsetWidth;
    const textHeight = text.offsetHeight;

    x += dx;
    y += dy;

    if (x + textWidth > containerWidth || x < 0) dx = -dx;
    if (y + textHeight > containerHeight || y < 0) dy = -dy;

    text.style.left = x + 'px';
    text.style.top = y + 'px';

    requestAnimationFrame(animate);
}

function acceleration() {
    px+=100;
}


animate();