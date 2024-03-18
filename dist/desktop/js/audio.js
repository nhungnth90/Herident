/* ====================================
   JS AUDIO
   ==================================== */

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