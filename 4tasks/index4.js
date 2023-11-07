// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('select');
    const btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        if (selectedOption) {
            dropdown.remove(dropdown.selectedIndex);
        }
    });
});
    