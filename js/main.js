$ (window).load ( function() {
    $ ( ".before-after" ).twentytwenty ({
        //Настройка Lable
        before_label: 'Без скинали', // Set a custom before label
        after_label: 'Со скинали' // Set a custom after label
    });
    $('.before-slider').slick({
        //чтоб слайдер не перелистывалчся при свайпе по нем мышью
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots', 
            //Настройка кнопок
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
    });
    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_active');
    });
    //!Настройка select
    $('.select_checked').on('click', function() {
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click',  function(){
       var value = $(this).attr('data-value');
       console.log(value);
       $('#select-type').val(value);
       $('.select_checked').text(value);
       $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -150 + "px"});
        return false;
    });
    $ ('input[type="tel"]').mask("+7 (999) 999-99-99")
});