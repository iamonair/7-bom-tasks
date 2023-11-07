// 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
const buttons = document.querySelectorAll('button');
const link = document.querySelector('a');
const body = document.body;

buttons[0].addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
});

// 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
buttons[1].addEventListener('dblclick', () => {
    body.style.backgroundColor = 'pink';
});

// 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
buttons[2].addEventListener('mousedown', () => {
    body.style.backgroundColor = 'brown';
});

buttons[2].addEventListener('mouseup', () => {
    body.style.backgroundColor = 'white';
});

// При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
link.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseout', () => {
    body.style.backgroundColor = 'white';
});
