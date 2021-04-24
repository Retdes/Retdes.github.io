window.addEventListener('DOMContentLoaded', function () {
    //first slider
    $('ul.profit_catalog__tabs').on('click', 'li:not(.profit_catalog__content_active)', function () {
        $(this)
            .addClass('profit_catalog__tab_active').siblings().removeClass('profit_catalog__tab_active')
            .closest('div.container').find('div.profit_catalog__content').removeClass('profit_catalog__content_active').eq($(this).index()).addClass('profit_catalog__content_active');
    });


    let myCount;
    $('button.profit_button-right').click(function () {
        $(".profit_catalog__content-wrapper").each(function () {
            myCount = $(this).find('.profit_catalog__content_active').index();
            $(this).find('.profit_catalog__content_active').removeClass('profit_catalog__content_active').eq(myCount);
            $('ul.profit_catalog__tabs').find('.profit_catalog__tab_active').removeClass('profit_catalog__tab_active').eq(myCount);
            myCount += 1
            if (myCount == $(this).find('.profit_catalog__content').length) {
                //repeat slider 
                // myCount -= $(this).find('.profit_catalog__content').length;
                //
                myCount = $(this).find('.profit_catalog__content').length - 1;
            }
            $(this).find('div.profit_catalog__content').eq(myCount).addClass('profit_catalog__content_active');
            $('ul.profit_catalog__tabs').find('.profit_catalog__tab').eq(myCount).addClass('profit_catalog__tab_active');
        })
    });
    $('button.profit_button-left').click(function () {
        $(".profit_catalog__content-wrapper").each(function () {
            myCount = $(this).find('.profit_catalog__content_active').index();
            $('ul.profit_catalog__tabs').find('.profit_catalog__tab_active').removeClass('profit_catalog__tab_active').eq(myCount);
            myCount -= 1;
            $(this).find('.profit_catalog__content_active').removeClass('profit_catalog__content_active').eq(myCount);
            if (myCount <= 0) {
                //repeat slider 
                // myCount = $(this).find('.profit_catalog__content').length - 1;
                //
                myCount = $(this).find('.profit_catalog__content').length - $(this).find('.profit_catalog__content').length;
            }
            $(this).find('div.profit_catalog__content').eq(myCount).addClass('profit_catalog__content_active');
            $('ul.profit_catalog__tabs').find('.profit_catalog__tab').eq(myCount).addClass('profit_catalog__tab_active');
        })
    });




    //second slider
    $('ul.knowing_catalog__tabs').on('click', 'li:not(.knowing_catalog__content_active)', function () {
        $(this)
            .addClass('knowing_catalog__tab_active').siblings().removeClass('knowing_catalog__tab_active')
            .closest('div.container').find('div.knowing_catalog__content').removeClass('knowing_catalog__content_active').eq($(this).index()).addClass('knowing_catalog__content_active');
    });


    let mySecondCount;
    $('button.knowing_button-right').click(function () {
        $(".knowing_catalog__content-wrapper").each(function () {
            mySecondCount = $(this).find('.knowing_catalog__content_active').index();
            $(this).find('.knowing_catalog__content_active').removeClass('knowing_catalog__content_active').eq(mySecondCount);
            $('ul.knowing_catalog__tabs').find('.knowing_catalog__tab_active').removeClass('knowing_catalog__tab_active').eq(mySecondCount);
            mySecondCount += 1
            if (mySecondCount == $(this).find('.knowing_catalog__content').length) {
                //repeat slider 
                // mySecondCount -= $(this).find('.knowing_catalog__content').length;
                //
                mySecondCount = $(this).find('.knowing_catalog__content').length - 1;
            }
            $(this).find('div.knowing_catalog__content').eq(mySecondCount).addClass('knowing_catalog__content_active');
            $('ul.knowing_catalog__tabs').find('.knowing_catalog__tab').eq(mySecondCount).addClass('knowing_catalog__tab_active');
        })
    });
    $('button.knowing_button-left').click(function () {
        $(".knowing_catalog__content-wrapper").each(function () {
            mySecondCount = $(this).find('.knowing_catalog__content_active').index();
            $('ul.knowing_catalog__tabs').find('.knowing_catalog__tab_active').removeClass('knowing_catalog__tab_active').eq(mySecondCount);
            mySecondCount -= 1;
            $(this).find('.knowing_catalog__content_active').removeClass('knowing_catalog__content_active').eq(mySecondCount);
            if (mySecondCount <= 0) {
                //repeat slider 
                // mySecondCount = $(this).find('.knowing_catalog__content').length - 1;
                //
                mySecondCount = $(this).find('.knowing_catalog__content').length - $(this).find('.knowing_catalog__content').length;
            }
            $(this).find('div.knowing_catalog__content').eq(mySecondCount).addClass('knowing_catalog__content_active');
            $('ul.knowing_catalog__tabs').find('.knowing_catalog__tab').eq(mySecondCount).addClass('knowing_catalog__tab_active');
        })
    });
    let myValue = true
    $('.header_menu').click(function () {
        if (myValue) {
            $('.mobile_menu').addClass(' mobile_menu-active');
            myValue = false;
        } else {
            $('.mobile_menu').removeClass(' mobile_menu-active');
            myValue = true;
        }
    })
});
