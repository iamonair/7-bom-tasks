const btn = document.querySelector('button');
const textContainer = document.createElement('div');
document.body.appendChild(textContainer);

function textMessage(text) {
    const newText = document.createElement('p');
    newText.textContent = text;
    textContainer.appendChild(newText);
}
// по натисканню на кнопку "I was pressed!", 
btn.addEventListener('click', function() {
    textMessage('I was pressed!');
});
// при наведенні на кнопку -"Mouse on me!", 
btn.addEventListener('mouseenter', function() {
    textMessage('Mouse on me!');
});
// при відведенні курсора миші - "Mouse is not on me!"
btn.addEventListener('mouseleave', function() {
    textMessage('Mouse is not on me!');
});
