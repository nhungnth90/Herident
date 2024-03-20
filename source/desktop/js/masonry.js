/* ====================================
   MASONRY
   ==================================== */

function masonry(masonry, paramCols, paramResponsive) {
    const tablet = 992;
    const mobile = 576;
    let cols;
    let responsive = {
        tablet: 2,
        mobile: 1
    };
    let currentCol = 0;
    const wrap = masonry;
    const items = masonry.querySelectorAll('.masonry-story');
    if (paramCols) {
        cols = paramCols
    } else {
        cols = 4
    }
    if (paramResponsive.tablet) {
        responsive.tablet = paramResponsive.tablet
    }

    if (paramResponsive.tablet) {
        responsive.mobile = paramResponsive.mobile
    }

    // create cols
    for (let i = 0; i < cols; i++) {
        const newCol = document.createElement('div');
        newCol.className = 'masonry-col';
        if (window.innerWidth >= tablet) {
            newCol.style.width = 'calc(100%/' + cols + ')';
        } else if (window.innerWidth < tablet && window.width >= mobile) {
            newCol.style.width = 'calc(100%/' + responsive.tablet + ')';
        } else {
            newCol.style.width = 'calc(100%/' + responsive.mobile + ')';
        }
        wrap.appendChild(newCol);
    }

    window.addEventListener('resize', function(e) {
        if (e.target.innerWidth >= tablet) {
            masonry.querySelectorAll('.masonry-col').forEach(element => {
                element.style.width = 'calc(100%/' + cols + ')';
            });
        } else if ((e.target.innerWidth < tablet) && (e.target.innerWidth >= mobile)) {
            masonry.querySelectorAll('.masonry-col').forEach(element => {
                element.style.width = 'calc(100%/' + responsive.tablet + ')';
            });
        } else {
            masonry.querySelectorAll('.masonry-col').forEach(element => {
                element.style.width = 'calc(100%/' + responsive.mobile + ')';
            });
        }
    })

    // append img to col
    for (let count = 0; count < items.length; count++) {
        masonry.querySelectorAll('.masonry-col')[currentCol].appendChild(items[count]);
        if (currentCol < cols - 1) {
            currentCol++;
        } else {
            currentCol = 0;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const masonrys = document.getElementsByClassName('masonry');
    for (let i = 0; i < masonrys.length; i++) {
        masonry(masonrys[i], null, { tablet: 2, mobile: 1 })
    }
});