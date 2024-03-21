/* ====================================
   JS
   ==================================== */

/*--- Toggle ---*/
// Search
$('.site-header>.ic-search').on('click', function () {
    $('.search-form').css("display", "flex").hide().fadeToggle();
    $(this).css("display", "none");
})

/*--- Sticky Nav ---*/
if ($('.site-header').length > 0) {
    var normalNavTop = $('.site-header').offset().top;
    var normalNavBottom = $('.site-header').offset().top + $('.site-header').outerHeight();
    var originalHeight = $('.site-header').height();
    $(window).scroll(function () {
        if ($(window).scrollTop() > normalNavBottom) {
            $('.site-header').css('height', originalHeight + 'px');
            $('.site-header').addClass('is-sticky');
        } else {
            $('.site-header').removeAttr('style');
            $('.site-header').removeClass('is-sticky');
        }
    });
}