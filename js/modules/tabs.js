function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTypeContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide', 'fade');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTypeContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add(activeClass);
    }

    hideTypeContent();

    showTypeContent(); //не обязателья указывать значение когда ( i = 0 )^

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.matches('div' + tabsSelector)) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTypeContent();
                    showTypeContent(i);
                }
            });
        }
    });

}

export default tabs;