let image = document.querySelector('.current-image');
let nextPage = document.querySelector('.button-next-page');
let previousPage = document.querySelector('.button-previous-page');
let pageSelector = document.getElementById('page-selector');

// Хранение данных о главах
let chapters = {
    chapter1: {
        numImages: 73,
        images: []
    },
    chapter2: {
        numImages: 51,
        images: []
    },
    chapter3: {
        numImages: 40,
        images: []
    },
    chapter4: {
        numImages: 22,
        images: []
    },
    chapter5: {
        numImages: 24,
        images: []
    },
    chapter6: {
        numImages: 30,
        images: []
    },
};

function fillChapterImages(chapters) {
    for (let k = 1; k <= Object.keys(chapters).length; k++) {
        let chapterName = 'chapter' + k;
        if (chapters[chapterName].numImages && !isNaN(chapters[chapterName].numImages)) {
            for (let j = 1; j <= chapters[chapterName].numImages; j++) {
                let imageName = j + '.png';
                let imagePath = 'source/' + chapterName + '/' + imageName;
                chapters[chapterName].images.push(imagePath);
            }
        } else {
            console.log('Некорректное количество изображений');
        }
    }
}

function fillPageSelector() {
    // очистка списка страниц
    while (pageSelector.firstChild) {
        pageSelector.removeChild(pageSelector.firstChild);
    }
    // заполнение списка страниц
    for (let i = 1; i <= chapters[chapterName].numImages; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = 'Page ' + i;
        pageSelector.add(option);
    }

    pageSelector.addEventListener('change', function() {
        pageIndex = parseInt(pageSelector.value) - 1;
        image.src = chapters[chapterName].images[pageIndex];
    })
}

function preloadCurrentChapterImages() {
    const currentChapterImages = chapters[chapterName].images;
    for (let i = 0; i < currentChapterImages.length; i++) {
      const img = new Image();
      img.src = currentChapterImages[i];
    }
  }
  
  // Вызовите функцию предзагрузки изображений текущей главы перед показом изображений пользователю
  preloadCurrentChapterImages();

function handleImageClick(event) {
    let screenWidth = window.innerWidth;
    let clickPosition = event.clientX;

    if (clickPosition < screenWidth / 2) {
        if (pageIndex > 0) {
            pageIndex--;
            image.src = chapters[chapterName].images[pageIndex];
            image.onload = function() {
                document.querySelector('.current-image').scrollIntoView();
            };            pageSelector.value = pageIndex + 1;
        } else if (pageIndex === 0 && chapterName !== "chapter1") {
            let currentChapterIndex = parseInt(chapterName.replace("chapter", ""));
            if (currentChapterIndex > 1) {
                chapterName = "chapter" + (currentChapterIndex - 1);
                pageIndex = chapters[chapterName].numImages - 1;
                image.src = chapters[chapterName].images[pageIndex];
                fillPageSelector();
                pageSelector.value = chapters[chapterName].numImages;
                image.onload = function() {
                    document.querySelector('.current-image').scrollIntoView();
                };                chapterSelector.value = `chapter${currentChapterIndex - 1}`;

            }
        }            
    } else if (clickPosition >= screenWidth / 2) {
        if (pageIndex < chapters[chapterName].numImages - 1) {
            pageIndex++;
            image.src = chapters[chapterName].images[pageIndex];
            image.onload = function() {
                document.querySelector('.current-image').scrollIntoView();
            };            pageSelector.value = pageIndex + 1;
        } else if ((pageIndex === chapters[chapterName].numImages - 1) && (chapterName !== "chapter" + (chapters.length - 1))) {
            let currentChapterIndex = parseInt(chapterName.replace("chapter", ""));
            chapterName = "chapter" + (currentChapterIndex + 1);
            pageIndex = 0;
            image.src = chapters[chapterName].images[pageIndex];
            fillPageSelector();
            image.onload = function() {
                document.querySelector('.current-image').scrollIntoView();
            };            pageSelector.value = pageIndex + 1;
            chapterSelector.value = `chapter${currentChapterIndex + 1}`;
        }
    }
}

function switchToNextPage() {
    if (pageIndex < chapters[chapterName].numImages - 1) {
        pageIndex++;
        image.src = chapters[chapterName].images[pageIndex];
        document.querySelector('.current-image').scrollIntoView();
        pageSelector.value = pageIndex + 1;
    } else if ((pageIndex === chapters[chapterName].numImages - 1) && (chapterName !== "chapter" + (chapters.length - 1))) {
        let currentChapterIndex = parseInt(chapterName.replace("chapter", ""));
        chapterName = "chapter" + (currentChapterIndex + 1);
        pageIndex = 0;
        image.src = chapters[chapterName].images[pageIndex];
        fillPageSelector();
        document.querySelector('.current-image').scrollIntoView();
        pageSelector.value = pageIndex + 1;
        chapterSelector.value = `chapter${currentChapterIndex + 1}`;

    }
}

function switchToPreviousPage() {
    if (pageIndex > 0) {
        pageIndex--;
        image.src = chapters[chapterName].images[pageIndex];
        document.querySelector('.current-image').scrollIntoView();
        pageSelector.value = pageIndex + 1;
    } else if (pageIndex === 0 && chapterName !== "chapter1") {
        let currentChapterIndex = parseInt(chapterName.replace("chapter", ""));
        if (currentChapterIndex > 1) {
            chapterName = "chapter" + (currentChapterIndex - 1);
            pageIndex = chapters[chapterName].numImages - 1;
            image.src = chapters[chapterName].images[pageIndex];
            fillPageSelector();
            pageSelector.value = chapters[chapterName].numImages;
            document.querySelector('.current-image').scrollIntoView();
            chapterSelector.value = `chapter${currentChapterIndex - 1}`;

        }
    }
}

fillChapterImages(chapters);
image.src = chapters[chapterName].images[pageIndex];
console.log(chapters);
fillPageSelector();
nextPage.addEventListener('click', switchToNextPage);  
previousPage.addEventListener('click', switchToPreviousPage);
image.addEventListener('click', handleImageClick);

/* Проблемы в текущем файле:
 
*/

/* Задачи в текущем файле:
*** 1) Поместить функционал переключения страниц в функции
*** 2) Продумать, стоить ли переходить на новую страницу - НЕТ
*** 3) Продумать структура данных, хранящую в себе всё о каждой главе и странице
*** 4) Перенести весь функционал на все главы
*** 5) Придумать новую архитектуру проекта объединяющую многочисленные html и js файлы
*** 6) Переключать главу на последней странице, при нажатии на картинку
*/
/*
7) Я не смог сделать рабочей архитектуру проекта следующего вида:
    1) index.html
    2) scroll-animation.js 
    3) reader-page.html
    4) page-switcher.js
    5) chapter-switcher.js
В задумке хотелось, чтобы не было однотипных страниц reader-page1.html, reader-page2.html и рассматривал возможность использовать один HTML-файл. Также, я хотел передавать данные о выбранной главе с index.html в page-switcher.js и отображать главу в reader-page.html.

Идея для решения:
Попробовать выполнить задачу с помощью разных значений value или подобных и за счёт этого переходить на нужную главу
*/