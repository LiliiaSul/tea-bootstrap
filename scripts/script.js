$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        prevArrow: "<div class='prev'></div>",
        nextArrow: "<div class='next'></div>",
    });


    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content",
            icons: {
                header: "ui-icon-down",
                activeHeader: "ui-icon-up",
            }
        });
    });

    let formHeader = $('.form-header')
    let orderForm = $('#order-form');
    let inputName = $('#inputName');
    let inputLastName = $('#inputLastName');
    let inputPhone = $('#inputPhone');
    let inputCountry = $('#inputCountry');
    let inputIndex = $('#inputIndex');
    let inputAddress = $('#inputAddress');
    $('#create-order').click(function () {
        if (!inputName.val()) {
            alert('Заполните имя');
            return;
        }
        if (!inputLastName.val()) {
            alert('Заполните фамилию');
            return;
        }
        if (!inputPhone.val()) {
            alert('Заполните телефон');
            return;
        }
        if (!inputCountry.val()) {
            alert('Заполните страну');
            return;
        }
        if (!inputIndex.val()) {
            alert('Заполните индекс');
            return;
        }

        if (inputIndex.val().length !== 6) {
            alert('Индекс должен содержать 6 символов');
            return;
        }
        if (!inputAddress.val()) {
            alert('Заполните адрес');
            return;
        }

        formHeader.addClass('d-none');
        orderForm.addClass('d-none');
        $('#hide-block').removeClass('d-none').show();
        setTimeout(() => {
            orderForm[0].reset();
            formHeader.removeClass('d-none').show();
            orderForm.removeClass('d-none').show();
            $('#hide-block').addClass('d-none');
        }, 3000);

    })

    inputIndex.on('keydown', function (e) {
        if (isNaN(parseInt(e.key))) {
            return false;
        }
    });

    inputPhone.inputmask({"mask": "(999) 999-999-9999"});

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
});







