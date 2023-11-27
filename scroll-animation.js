// Плавный скролл вниз/вверх по кнопке
let isScrollDown = true;

document.querySelector('.arrow').addEventListener('click', function() {
    this.classList.toggle('open');

    if (isScrollDown) {
        document.getElementById('page-bottom').scrollIntoView({behavior: 'smooth'});
    } else {
        // window.scrollTo({top: 0, behavior: 'smooth'}); 
        document.getElementById('page-top').scrollIntoView({behavior: 'smooth'});
    }

    isScrollDown = !isScrollDown;
});

// Корректно отображать положение стрелки при a) пролистывании страницы колёсиком b) при переходе на главную страницу из читалки