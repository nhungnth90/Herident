/* ====================================
   JS
   ==================================== */

/*--- Toggle ---*/
// Search
$('.search-btn').on('click', function() {
    $('.search .dropdown-menu').fadeToggle("fast");
    $(".search").toggleClass("active");
    $("body").toggleClass("backdrop");
});

// Menu
$('.menu-btn').on('click', function() {
    $('.menu .dropdown-menu').fadeToggle("fast");
    $(".menu").toggleClass("active");
    $("body").toggleClass("backdrop");
});

// User Login
$('.username').on('click', function() {
    $('.user-login .dropdown-menu').fadeToggle("fast");
});


/*--- Sticky ---*/
// Header
var stickyOffset = $('.navigation').offset().top;
$(window).scroll(function () {
    var sticky = $('.navigation'),
        scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


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


/*--- Modal ---*/
$("body").append("<div class='modal-backdrop'></div>");
$('.btn-modal').on('click', function () {
    $("body").addClass("modal-open");
    $('.modal-backdrop').fadeIn();
    var id = $(this).data('target');
    $('.modal[data-target="' + id + '"]').fadeIn();
});

$('.btn-close').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

$('.modal-backdrop').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

// Login / Register
const $icon = $(".form-group .ic-eye");
$icon.on('click', function(e) {
    $icon.toggleClass('ic-eye-slash');
});