import {
    fadeInModal,
    fadeOutModal
} from './modal';
import {
    postData
} from '../services/services';

function forms() {
    //Forms

    const forms = document.querySelectorAll('form'),
        modalWindow = document.querySelector('.modal');

    const Messages = {
        loading: 'img/form/spinner.svg',
        success: 'Все Ок!',
        failure: 'Что-то пошло не так...',
        pause: 'Подождите немного !'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        function sendData(e) {
            e.preventDefault();

            const statusMessages = document.createElement('div');
            statusMessages.classList.add('statusWindow');

            statusMessages.innerHTML = `Загрузка <img src=${Messages.loading}>`;
            document.body.append(statusMessages);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //!

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    statusMessages.textContent = Messages.success;
                    showThanksModal();
                }).catch(() => {
                    statusMessages.textContent = Messages.failure;
                }).finally(() => {
                    form.reset();
                    if (document.querySelectorAll('.statusWindow').length > 1) {
                        statusMessages.remove();
                    }
                    setTimeout(() => {
                        statusMessages.remove();
                    }, 4000);
                });
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (document.querySelector('.modal').childElementCount == 1) {
                sendData(e);
            } else {
                document.querySelector('.statusWindow').textContent = Messages.pause;
            }
        });
    }

    function showThanksModal() {

        const prevModalDiaolg = document.querySelector('.modal__dialog');

        prevModalDiaolg.classList.add('hide');
        fadeInModal(modalWindow);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = ` 
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">Спасибо ! Скоро мы с вами свяжемся...</div>
            <div class="modal__circle">!</div>
        </div>`;
        modalWindow.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();

            prevModalDiaolg.classList.add('show');
            prevModalDiaolg.classList.remove('hide');

            fadeOutModal(modalWindow);
        }, 4000);
    }
}

export default forms;