function fadeInModal(item) {
    item.classList.add('show', 'fade');
    item.classList.remove('hide');

    document.body.style.cssText = 'overflow: hidden; padding-right: 20px;';
}

function fadeOutModal(item) {
    item.classList.remove('show', 'fade');
    item.classList.add('hide');
    document.body.style.cssText = 'overflow: auto;';
}

function modal (triggerSelector, modalSelector) {
    
    //Modal 

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modalWindow = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            fadeInModal(modalWindow);
            clearRepeatShowModal();
        });
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target && e.target.matches('div.modal__close') || e.target && e.target.matches('div.modal')) {
            fadeOutModal(modalWindow);
        }
    });

    document.body.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            fadeOutModal(modalWindow);
        }
    });

    const modalTimerId = setTimeout(() => {
        fadeInModal(modalWindow);
        clearRepeatShowModal();
    }, 10000);

    function showModalByScroll() {
        if ((Math.floor(window.pageYOffset) + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
            fadeInModal(modalWindow);
            clearRepeatShowModal();
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    function clearRepeatShowModal() {
        window.removeEventListener('scroll', showModalByScroll);
        clearInterval(modalTimerId);
    }


}

export default modal;

export {fadeInModal, fadeOutModal};