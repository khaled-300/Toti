var els = document.getElementsByClassName('active')
var button = document.querySelector('a')

button.addEventListener('click', _removeClasses)

function _removeClasses() {
    while (els[0]) {
        els[0].classList.remove('active')
    }
}