/* ====================================
   JS
   ==================================== */

/*--- Toggle ---*/
// Search
$('.site-header>.ic-search').on('click', function () {
    $(this).toggleClass("active");
    $('.search-form').fadeToggle("fast");
    $("body").toggleClass("backdrop");
})

// Menu
$('.ic-menu').on('click', function () {
    $(this).toggleClass("active");
    $('.dropdown-menu').fadeToggle("fast");
})

// Submenu
$(".menu-heading .ic-chevron-down").click(function(e) {
    e.preventDefault();
    const parent = $(e.target).parent();
    const subMenu = parent.siblings()[0];
    $(subMenu).slideToggle("fast");
});

/*--- Sticky header ---*/
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

/*--- Back To Top ---*/
var btn = $(".back-to-top");
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
});