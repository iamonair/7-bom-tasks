// по кліку на кнопку: стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const pText = document.getElementById('text');
    pText.style.color = 'orange';
    pText.style.fontSize = '20px';
    pText.style.fontFamily = 'Comic Sans MS';
});

