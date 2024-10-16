var theme = document.querySelector('#theme');
var themeButtons = document.querySelectorAll('.theme');

themeButtons.forEach(function (themeButton) {
    themeButton.addEventListener('click', function () {

        if (theme.getAttribute('href') == 'styles/a_kepzesrol.css') {
            theme.setAttribute('href', 'styles/a_kepzesrol_dark.css');
            themeButtons.forEach(function (button) {
                button.src = 'assets/lightmode-icon.svg';
            });
        }
        else {
            theme.setAttribute('href', 'styles/a_kepzesrol.css');
            themeButtons.forEach(function (button) {
                button.src = 'assets/darkmode-icon.svg';
            });
        }
    });
});