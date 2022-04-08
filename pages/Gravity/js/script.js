window.addEventListener('DOMContentLoaded', () => {


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


    //Slider !
    function easySlider(contentSelector, buttonSelector) {
        const contentHeader = document.querySelectorAll(contentSelector),
            buttonHeader = document.querySelectorAll(buttonSelector);
        buttonHeader.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                if (i >= 2) {
                    i -= 2;
                }
                contentHeader.forEach(item => {
                    item.classList.add('hidden');
                });
                contentHeader[i].classList.remove('hidden');
            });
        });
    };

    easySlider('.content', '.header__slider > .button-slide');
    easySlider('.testimonials__content', '.testimonials__slider > .button-slide');


    const contentService = document.querySelectorAll('.service__content'),
        buttonService = document.querySelectorAll('.service__slider > .button-slide');

    buttonService.forEach((item, i) => {
        item.addEventListener('click', () => {
            contentService.forEach(item => {
                item.classList.remove('showed');
            });
            contentService[i].classList.add('showed');
        });
    });

    //Tabs !

    const tabs = document.querySelectorAll('.works__tab'),
        tabContents = document.querySelectorAll('.works__content');

    tabs.forEach((item, i) => {
        item.addEventListener('click', (e) => {

            tabs.forEach(item => {
                item.classList.remove('active-tab');
            });

            e.target.classList.add('active-tab');

            tabContents.forEach(item => {
                if (!item.classList.contains('hidden')) {
                    item.classList.add('hidden');
                }
            });
            tabContents[i].classList.remove('hidden');
        });
    });
});