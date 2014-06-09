function fixSize(left, right) {

    function update() {
        var top = left.getBoundingClientRect().top + document.body.scrollTop;
        var height = (window.innerHeight - top - 10) + 'px';
        left.style.height = height;
        right.style.height = height;
    }

    var debounce = 0;

    window.addEventListener('resize', function (e) {
        if (debounce) {
            clearTimeout(debounce);
        }
        debounce = setTimeout(update, 50);
    });

    update();
}


module.exports = fixSize;
