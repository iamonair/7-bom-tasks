// відслідковуватиме зміну розміру (ширини і висоти) вікна браузера 
// виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення
const height = document.querySelector('#height');
const width = document.querySelector('#width');
function updateSize() {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
}
updateSize();
window.addEventListener('resize', updateSize);
