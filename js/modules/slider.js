function slider({container, slide, prevBtn, nextBtn, wrapper, field, currenter, totaler}) {

    //Slider Hard Version

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        current = document.querySelector(currenter),
        total = document.querySelector(totaler),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.4s all';

    slidesWrapper.style.overflow = 'hidden';

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(item => {
        item.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function dotWorkCurrent() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    next.addEventListener('click', () => {
        if (offset == 100 - (100 / slides.length)) {
            offset = 0;
        } else {
            offset += 100 / slides.length;
        }

        slidesField.style.transform = `translateX(-${offset}%)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        dotWorkCurrent();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = 100 - (100 / slides.length);
        } else {
            offset -= 100 / slides.length;
        }

        slidesField.style.transform = `translateX(-${offset}%)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        dotWorkCurrent();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = 100 / slides.length;
            offset *= slideTo - 1;

            slidesField.style.transform = `translateX(-${offset}%)`;

            dotWorkCurrent();
        });
    });
}

export default slider;