let currentZIndex = 1;

document.querySelectorAll('.screen').forEach(screen => {
screen.addEventListener('mousedown', startDragging);
screen.addEventListener('mouseup', stopDragging);
screen.addEventListener('mousemove', drag);
});

function startDragging(event) {
const screen = event.target.closest('.screen');
screen.classList.add('dragging');
currentZIndex++;
screen.style.zIndex = currentZIndex;
screen.startX = event.clientX - screen.offsetLeft;
screen.startY = event.clientY - screen.offsetTop;
}

function stopDragging(event) {
const screen = event.target.closest('.screen');
screen.classList.remove('dragging');
}

function drag(event) {
const screen = event.target.closest('.screen');
if (screen.classList.contains('dragging')) {
    const offsetX = event.clientX - screen.startX;
    const offsetY = event.clientY - screen.startY;
    screen.style.left = offsetX + 'px';
    screen.style.top = offsetY + 'px';
}
}