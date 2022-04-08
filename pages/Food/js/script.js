import 'nodelist-foreach-polyfill'; 

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabheader__item', '.tabcontent','.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2023-11-10');
    cards();
    calc();
    forms();
    slider({
        container: '.offer__slider',
        prevBtn: '.offer__slider-prev',
        nextBtn: '.offer__slider-next',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide',
        totaler: '#total',
        currenter: '#current'
    });

});