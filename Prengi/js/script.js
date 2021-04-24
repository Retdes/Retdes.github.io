window.addEventListener('DOMContentLoaded', function () {
    // 1 slider start
    let next = 0,
        Pnext = 1;

    function fadeInOut(el1, el2) {
        document.getElementById(el1).classList.add('hidden');
        document.getElementById(el1).classList.remove('show');
        document.getElementById(el2).classList.add('show');
        document.getElementById(el2).classList.remove('hidden');
    }

    function active(btn1, btn2) {
        document.getElementById(btn1).classList.add('circle_active');
        document.getElementById(btn2).classList.remove('circle_active');
    }

    function sliderNext() {
        switch (next) {
            case 0:
                fadeInOut('slider1', 'slider2'); //correct if add new block
                active('btn2', 'btn1');
                break;
            case 1:
                fadeInOut('slider2', 'slider3');
                active('btn3', 'btn2');
                break;
            case 2:
                fadeInOut('slider3', 'slider4');
                active('btn4', 'btn3');
                break;
            case 3:
                fadeInOut('slider4', 'slider1');
                active('btn1', 'btn4');
                break;
        }
    }

    function sliderPrev() {
        switch (next) {
            case 0:
                fadeInOut('slider2', 'slider1'); //correct if add new block
                active('btn1', 'btn2');
                break;
            case 1:
                fadeInOut('slider3', 'slider2');
                active('btn2', 'btn3');
                break;
            case 2:
                fadeInOut('slider4', 'slider3');
                active('btn3', 'btn4');
                break;
            case 3:
                fadeInOut('slider1', 'slider4');
                active('btn4', 'btn1');
                break;
        }
    }

    document.getElementById('next').onclick = function () {
        switch (next) {
            case 4: //correct if add new block
                next = 0;
                sliderNext();
                break;
            default:
                sliderNext();
                break;
        }
        next += 1;
        if (next >= 4) { //correct if add new block
            next = 0;
        }
    };
    document.getElementById('prev').onclick = function () {
        next -= 1;
        switch (next) {
            case -1:
                next = 3; //correct if add new block
                sliderPrev();
                break;
            default:
                sliderPrev();
                break;
        }
        if (next <= 0) {
            next = 4; //correct if add new block
        }
    };

    // 1 slider end
    // 2 slider start

    function myNext(slide) {
        for (let count = 1; count <= 6; count++) {
            if (document.getElementById(slide + count).classList.contains('show')) {
                document.getElementById(slide + count).classList.remove('show');
                document.getElementById(slide + count).classList.add('hidden');
            }
        }
    }

    document.getElementById('Pnext').onclick = function () {
        if (Pnext >= 6) {
            Pnext = 0;
        }
        Pnext += 1;
        myNext('PSlider');
        console.log('Pnext: ' + Pnext);
        activeTabsClickArrow('li' + Pnext);
        document.getElementById('PSlider' + Pnext).classList.remove('hidden');
        document.getElementById('PSlider' + Pnext).classList.add('show');
        return Pnext;
    }

    //Prev Slide Start

    function myPrev(slide) {
        for (let count = 1; count <= 6; count++) {
            if (document.getElementById(slide + count).classList.contains('show')) {
                document.getElementById(slide + count).classList.remove('show');
                document.getElementById(slide + count).classList.add('hidden');
            }
        }
    }

    document.getElementById('Pprev').onclick = function () {
        if (Pnext <= 1) {
            Pnext = 7;
        }
        Pnext -= 1;
        myPrev('PSlider');
        console.log('Pprev: ' + Pnext);
        activeTabsClickArrow('li' + Pnext);
        document.getElementById('PSlider' + Pnext).classList.remove('hidden');
        document.getElementById('PSlider' + Pnext).classList.add('show');
        return Pnext;
    }

    //2 Slider end 
    //Tabs Contorl !------------------------------------------


    function controlActiveElement() {
        for (let count = 1; count <= 6; count++) {
            if (document.getElementById('li' + count).classList.contains('active')) {
                document.getElementById('li' + count).classList.remove('active');
            }
            if (document.getElementById('PSlider' + count).classList.contains('show')) {
                document.getElementById('PSlider' + count).classList.remove('show');
                document.getElementById('PSlider' + count).classList.add('hidden');
            }
        }
    }

    function addActiveClass(el, el2, countNextValue) {
        document.getElementById(el).onclick = function () {
            controlActiveElement();
            document.getElementById(el).classList.add('active');
            document.getElementById(el2).classList.remove('hidden');
            document.getElementById(el2).classList.add('show');
            Pnext = countNextValue;
            return Pnext;
        }
    }
    addActiveClass('li1', 'PSlider1', 1);
    addActiveClass('li2', 'PSlider2', 2);
    addActiveClass('li3', 'PSlider3', 3);
    addActiveClass('li4', 'PSlider4', 4);
    addActiveClass('li5', 'PSlider5', 5);
    addActiveClass('li6', 'PSlider6', 6);

    function activeTabsClickArrow(el) {
        controlActiveElement();
        document.getElementById(el).classList.add('active');
    }
    let myVaribale = 0;
    document.getElementById('tapsButton').onclick = function () {
        if (myVaribale == 0) {
            document.getElementById('flags').classList.add('flags_active');
            myVaribale += 1;
        } else {
            document.getElementById('flags').classList.remove('flags_active');
            myVaribale = 0;
        }
    }
    document.getElementById('dinamicArrow').onclick = function () {
        if (myVaribale == 0) {
            document.getElementById('promo__puncts').classList.add('promo__puncts_active');
            document.getElementById('dinamicArrow').classList.add('dinamicArrow_active');
            myVaribale += 1;
        } else {
            document.getElementById('promo__puncts').classList.remove('promo__puncts_active');
            document.getElementById('dinamicArrow').classList.remove('dinamicArrow_active');
            myVaribale = 0;
        }
    }
});