let nextChapter = document.querySelector('.next-chapter');
let previousChapter = document.querySelector('.previous-chapter');
// let chapterSelector = document.querySelector('.chapter-selector');


function nextChapterClick () {
    // Получение номера текущей главы
    let currentChapterNumber = parseInt(chapterName.replace("chapter", ""));
    // Проверка, что текущая глава не последняя
    if (currentChapterNumber < Object.keys(chapters).length) {
        // Увеличение номера текущей главы
        currentChapterNumber++;
        // Формирование имени следующей главы
        let nextChapterName = "chapter" + currentChapterNumber;
        // Проверка, что у следующей главы есть изображения
        if (chapters[nextChapterName].images.length > 0) {
            // Обновление значения переменной chapterName
            chapterName = nextChapterName;
            // Сброс значения pageIndex
            pageIndex = 0;
            // Обновление изображения на странице
            image.src = chapters[chapterName].images[pageIndex];

            document.querySelector('.current-image').scrollIntoView();
        }
    }
    fillPageSelector();

    // Обновление значения chapter-selector
    chapterSelector.value = `chapter${currentChapterNumber}`;
}

function previousChapterClick () {
    // Получение номера текущей главы
    let currentChapterNumber = parseInt(chapterName.replace("chapter", ""));
    // Проверка, что текущая глава не первая
    if (currentChapterNumber > 1) {
        // Уменьшение номера текущей главы
        currentChapterNumber--;
        // Формирование имени предыдущей главы
        let previousChapterName = "chapter" + currentChapterNumber;
        // Проверка, что у предыдущей главы есть изображения
        if (chapters[previousChapterName].images.length > 0) {
            // Обновление значения переменной chapterName
            chapterName = previousChapterName;
            // Сброс значения pageIndex
            pageIndex = 0;
            // Обновление изображения на странице
            image.src = chapters[chapterName].images[pageIndex];

            document.querySelector('.current-image').scrollIntoView();

        }
    }
    fillPageSelector();

    // Обновление значения chapter-selector
    chapterSelector.value = `chapter${currentChapterNumber}`;
}

function selectChapter() {
    pageIndex = 0;
    let chapterValue = chapterSelector.value;

    // Задать соответствующие переменные в зависимости от выбранного Chapter
    switch (chapterValue) {
    case 'chapter1':
        chapterName = 'chapter1';
        break;
    case 'chapter2':
        chapterName = 'chapter2';
        break;
    case 'chapter3':
        chapterName = 'chapter3';
        break;
    case 'chapter4':
        chapterName = 'chapter4';
        break;
    case 'chapter5':
        chapterName = 'chapter5';
        break;
    case 'chapter6':
        chapterName = 'chapter6';
        break;    
    default:
            // Вывести информацию о неожиданном значении
            console.log('Непредвиденное значение выбранной опции');
            chapterName = '';
            pageIndex = -1;
            break;
    }

    image.src = chapters[chapterName].images[pageIndex];
    document.querySelector('.current-image').scrollIntoView();
    fillPageSelector();    
}


nextChapter.addEventListener('click', nextChapterClick);
previousChapter.addEventListener('click', previousChapterClick);
chapterSelector.addEventListener('change', selectChapter);