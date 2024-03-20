/* ====================================
   JS
   ==================================== */

/*--- Sticky Nav ---*/
if ($('.site-header').length > 0) {
   var normalNavTop = $('.site-header').offset().top;
   var normalNavBottom = $('.site-header').offset().top + $('.site-header').outerHeight();
   var originalHeight = $('.site-header').height();
   $(window).scroll(function() {
       if ($(window).scrollTop() > normalNavBottom) {
           $('.site-header').css('height', originalHeight + 'px');
           $('.site-header').addClass('is-sticky');
       } else {
           $('.site-header').removeAttr('style');
           $('.site-header').removeClass('is-sticky');
       }
   });
}

/*--- Audio ---*/
$(".audio .right .select-voice").click(function (e) {
    e.preventDefault();
    $(".audio .right .voice-board").toggle();
});

$(".audio .play-button").click(function (e) {
    e.preventDefault();
    $(".audio .ic-audio-pause").toggleClass("ic-audio-play");
});

$(".audio .mute-button").click(function (e) {
    e.preventDefault();
    $(".audio .ic-audio-volume").toggleClass("ic-audio-volume-slash");
});

$(".modal-body .ic-eye").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("slash");
});

/*--- Copy Source ---*/
if ($('.article__source .getlink').length > 0) {
    $('.article__source .btn').on('click', function () {
        $('.source-toggle').toggleClass("show");
    });

    var $temp = $("<input>");
    var $url = $('.source-toggle a').attr('href');
    $('.article__source .getlink').on('click', function () {
        $("body").append($temp);
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();
        $('.article__source .getlink').html('Đã copy');
    });
}