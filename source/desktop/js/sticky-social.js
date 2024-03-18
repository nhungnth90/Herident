/* ====================================
   JS STICKY
   ==================================== */

/*--- Social-bar ---*/
function stickyBox(contentbox, sidebarbox, sidebartop, sticky, top) {
    $(window).scroll(function () {
        var contentHeight = $(contentbox).height();
        var sidebarHeight = $(sidebarbox).height();
        if (sidebarHeight <= contentHeight) {
            var sidebarWidth = $(sidebarbox).width();
            var curPos = $(window).scrollTop();
            var stickyTop = curPos - top;
            if ($(sidebartop).length > 0) {
                stickyTop = curPos - $(sidebartop).offset().top - $(sidebartop).height();
            } else {
                stickyTop = curPos - $(sidebarbox).offset().top;
            }
            var stickyBottom = curPos - $(contentbox).offset().top - $(contentbox).height() + $(sticky).height() + top;
            if (stickyTop > 0) {
                $(sticky).css('position', 'fixed');
                $(sticky).css('top', top + 'px');
                $(sticky).css('width', sidebarWidth + 'px');
                $(sticky).css('margin', '0 auto');
            } else {
                $(sticky).removeAttr('style');
            }
            if (stickyBottom > 0)
                $(sticky).css('top', -1 * stickyBottom);
        }
    });
}

if ($('.social-bar').length > 0 && $('.article__body').length > 0) {
    stickyBox(".article__body", ".social-bar", "", ".social-bar .social", 80);
}