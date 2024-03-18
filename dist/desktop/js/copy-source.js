// toggle source detail page
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
/* end */