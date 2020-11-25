function calc() {
    //Calc

    const result = document.querySelector('.calculating__result span');
    let sex = localStorage.getItem('sex') ? localStorage.getItem('sex') : 'female',
        ratio = localStorage.getItem('ratio') ? localStorage.getItem('ratio') : 1.375,
        height, weight, age;

    localStorage.setItem('ratio', ratio);
    localStorage.setItem('sex', sex);

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            if (item.getAttribute('id') === sex) {
                item.classList.add(activeClass);
            } else if (item.getAttribute('data-ration') === ratio) {
                item.classList.add(activeClass);
            } else {
                item.classList.remove(activeClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    function getStaticInformation(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector}`);

        elements.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ration')) {
                    ratio = +e.target.getAttribute('data-ration');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ration'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(item => {
                    item.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
            }

            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

export default calc;