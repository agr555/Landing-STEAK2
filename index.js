import './src/styles/styles.less'
// import './src/styles/variables.less'
// import './src/styles/adaptive.less'
// import './src/styles/animation.less'
// require ('./src/styles/animation.less')
console.log(1)
// import "./style.css";
/*
$('.image-popup-link').magnificPopup({
    type:'image',
    gallery:{enabled:true}
});
*/
$(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,

                dots: false,
            },
            400: {
                items: 1,

            },
            900: {
                items: 2
            },
            2000: {
                items: 3
            }
        }
    });

    /*   $('#reserve-button > button').click(() => {
           let name = $('#name');
           let count = $('#count');
           let phone = $('#phone');
           let time = $('#time');
           if (name.val() && name.val() && phone.val() && time.val()) {
               $.ajax({
                   type: 'post',
                   url: 'mail.php',
                   data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                   success: () => {
                       $('#reservation-sent').show();
                       $('#reservation-content').hide();
                   },
                   error: () => {
                       $('#reservation-container').hide();
                       alert('Ошибка бронирования, свяжитесь, пожалуйста, по номеру телефона.')
                   }
               });
           } else {
               $('#reserve-error').show();
           }
       });*/


    //По выбору меню О НАС  перейти к блоку
    $('.about-us').click((e) => {
        $('.section2')[0].scrollIntoView({ behavior: "smooth" });
    });
    //По выбору меню  МЕНЮ  перейти к блоку карточек
    $('.our-menu').click((e) => {
        $('.order-items')[0].scrollIntoView({ behavior: "smooth" });
    });
    //По выбору меню  ЗАКАЗАТЬ  перейти к блоку
    $('.to-order').click((e) => {
        $('.checkout')[0].scrollIntoView({ behavior: "smooth" });
    });
    //По кнопке ВЫБРАТЬ СТЕЙК  перейти к блоку
    $('.btn-choice').click((e) => {
        $('.section3')[0].scrollIntoView({ behavior: "smooth" });
    });


    $('button.owl-dot').click((e) => {
        $('.section3')[0].scrollIntoView({ behavior: "smooth" });
    });
    //По кнопке заказать скопировать название карточки и перейти сразу к форме заказа
    //$('#steakForm').attr('placeholder', "Name");
    let productInput = document.getElementById('steakForm');
    $('.btn-order').click((e) => {
        productInput.value = $(e.target).parents('.order-item').find('.item-title').text();
        $('.checkout')[0].scrollIntoView({ behavior: "smooth" });
    });


    document.getElementById('small-menu').onclick = function () {
        document.getElementById('menu').classList.add('open');
    }
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    });



    ///////////////////отправка
    /////////////////
    let loader = $('.loader');

    const ErrorBorderColor = $('.form-actions').css('border-color');
    const ErrorTextColor = $('.form-check-label').css('color');

    $('#submitForm').click(function () {

        let steak = $('#steakForm');
        let name = $('#nameForm');
        let phone = $('#phoneForm');

        phone.inputmask({ "mask": "+380 (99) 999 - 99 - 99", greedy: true }); //specifying options

        let hasError = false;
        $('.error-input').hide();
        $('.form-input').css('border-color', ErrorBorderColor);
        console.log(ErrorBorderColor);


        if (!steak.val()) {
            steak.prev().show();
            steak.css('border-color', 'red');
            hasError = true;
            alert("Сначала выберите стейк!")
        }

        if (!name.val()) {
            name.prev().show();
            name.css('border-color', 'red');
            hasError = true;
            alert("Введите имя!")
        }

        if (!phone.val()) {
            phone.css('border-color', 'red');
            phone.prev().show();
            hasError = true;
            alert("Введите телефон!")
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                type: "POST",
                url: "http://testologia.site/checkout",
                //  url: 'mail1.php',
                data: { steak: steak.val(), name: name.val(), phone: phone.value }
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        alert("Спасибо, мы свяжемся с вами в ближайшее время!");
                        //  form.hide();
                    } else {
                        alert("Возникла ошибка при отправке данных");
                    }
                    console.log(msg);//name itlogia success=1
                });

        } else (console.log('hasError'));
    });

    /*
        $('#submitForm').click(() => {
            let steak = $('#steakForm');
            let name = $('#nameForm');
            let phone = $('#phoneForm');
    
            if (name.val() && name.val() && phone.value ) {
                $.ajax({
                    type: "POST",
                    url: 'mail.php',
                    data: {steak: steak.val(), name: name.val(), phone: phone.value},
                    success: () => {
                        alert('HELLO.')
                    },
                    error: () => {
                        alert('Ошибка бронирования, свяжитесь, пожалуйста, по номеру телефона.')
                    }
                });
            } else {
                alert('Ошибка.')
            }
        });
    
    */
    ///////////////////////////////////
});