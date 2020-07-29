    var elems = document.querySelectorAll('.elem')

    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function (event) {
            deactivateActiveElem();

            this.classList.add('active');
            event.stopPropagation();
        });
    }
    function deactivateActiveElem() {
        var activeElem = getActiveElem();
        if (activeElem) {
            deactivateElem(activeElem);
        }
    }
    function deactivateElem(elem) {
        elem.classList.remove('active');
    }
    function getActiveElem() {
        return document.querySelector('.active')
    }

    window.addEventListener('click', function (event) {
        var activeElem = getActiveElem();
        if (activeElem) {
            activeElem.style.left = (event.clientX - 100 / 2) + 'px';
            activeElem.style.top = (event.clientY - 100 / 2) + 'px';
            deactivateElem(activeElem);
        }
    });

