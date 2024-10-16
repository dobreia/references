var theme = document.querySelector('#theme');
var themeButtons = document.querySelectorAll('.theme');

themeButtons.forEach(function (themeButton) {
    themeButton.addEventListener('click', function () {

        if (theme.getAttribute('href') == 'styles/az_autom.css') {
            theme.setAttribute('href', 'styles/az_autom_dark.css');
            themeButtons.forEach(function (button) {
                button.src = 'assets/lightmode-icon.svg';
            });
        }
        else {
            theme.setAttribute('href', 'styles/az_autom.css');
            themeButtons.forEach(function (button) {
                button.src = 'assets/darkmode-icon.svg';
            });
        }
    });
});