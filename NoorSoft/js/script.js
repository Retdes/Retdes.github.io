$(document).ready(function () {
    var span = document.getElementById('one'),
        namer = document.getElementById('namer'),
        click = 0;
    document.getElementById('wrapper').onclick = function () {
        if (click == 0) {
            document.getElementById('tuch').classList.add('tuch-active');
            click += 1;
        } else if (click == 1) {
            document.getElementById('tuch').classList.remove('tuch-active');
            click = 0;
        }
    };
    document.getElementById('promo__button-ru').onclick = function () {
        document.getElementById('promo__button-eng').classList.remove('promo__button-active');
        document.getElementById('promo__button-ru').classList.add('promo__button-active');
    };
    document.getElementById('promo__button-eng').onclick = function () {
        document.getElementById('promo__button-ru').classList.remove('promo__button-active');
        document.getElementById('promo__button-eng').classList.add('promo__button-active');
    };
    document.getElementById('rightarrow').onclick = function () {
        $('.reviews__block-1').fadeOut(0);
        $('.reviews__block-2').fadeIn(0);
        span.innerHTML = '2';
        namer.innerHTML = 'David Parser - FrontEnd and BackEnd';
    };
    document.getElementById('leftarrow').onclick = function () {
        $('.reviews__block-2').fadeOut(0);
        $('.reviews__block-1').fadeIn(0);
        span.innerHTML = '1';
        namer.innerHTML = 'Reaza Piri - CEO and co-founder';
    };
});

//correct js code 'not jQuery'