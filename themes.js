let readerContainer = document.querySelector('.reader-container');
let themeButton = document.querySelector('.theme-button');

themeButton.addEventListener('click', function () {
    readerContainer.classList.toggle('light-theme');
    readerContainer.classList.toggle('dark-theme');

    // Присваиваем значение темы
    let currentTheme = readerContainer.classList.contains('light-theme') ? 'light' : 'dark';

    // Получаем кнопку "theme-button"
    let themeButton = document.querySelector('.theme-button');

    // Устанавливаем соответствующий фоновый цвет в зависимости от выбранной темы
    if (currentTheme === 'light') {
        themeButton.style.backgroundColor = '#f2f2f3';
    } else {
        themeButton.style.backgroundColor = '#202020';
    }
})