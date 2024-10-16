// Elemek és gombok lekérése
var theme = document.querySelector('#theme');
var themeButtons = document.querySelectorAll('.theme');
var currentTheme = localStorage.getItem('theme');
var isDarkMode = false; // Alapértelmezett érték: világos mód
var downArrow = document.querySelector('.down-arrow');

// Függvény a téma beállításához
function setTheme(themeName) {
    theme.setAttribute('href', themeName);
    updateThemeButtons();
    localStorage.setItem('theme', themeName);
    updateDownArrow();
}

// Függvény a gombok frissítéséhez
function updateThemeButtons() {
    var iconSrc = theme.getAttribute('href').includes('dark') ? '../assets/lightmode-icon.svg' : '../assets/darkmode-icon.svg';
    themeButtons.forEach(function (button) {
        button.src = iconSrc;
    });
}

// Függvény a sötét mód stíluslap nevének lekéréséhez
function getDarkTheme() {
    var currentTheme = document.getElementById('theme').getAttribute('href');
    var basePath = currentTheme.includes('../') ? '../styles/' : 'styles/';
    switch (currentTheme) {
        case basePath + 'fooldal_en.css':
            return basePath + 'fooldal_en_dark.css';
        case basePath + 'rolam.css':
            return basePath + 'rolam_dark.css';
        case basePath + 'a_kepzesrol.css':
            return basePath + 'a_kepzesrol_dark.css';
        case basePath + 'az_autom.css':
            return basePath + 'az_autom_dark.css';
        case basePath + 'velemenyek.css':
            return basePath + 'velemenyek_dark.css';
        default:
            return currentTheme;
    }
}

// Függvény a világos mód stíluslap nevének lekéréséhez
function getLightTheme() {
    var currentTheme = theme.getAttribute('href');
    return currentTheme.replace('_dark', '');
}

// Kattintás eseményfigyelő hozzáadása a gombokhoz
themeButtons.forEach(function (themeButton) {
    themeButton.addEventListener('click', toggleDarkMode);
});


// A téma beállítása az oldal betöltésekor
document.addEventListener("DOMContentLoaded", function (event) {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode = savedTheme.includes('dark');
    }
    var themeName = isDarkMode ? getDarkTheme() : getLightTheme();
    setTheme(themeName);
});

// Függvény a sötét móddal való váltáshoz
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    var themeName = isDarkMode ? getDarkTheme() : getLightTheme();
    setTheme(themeName);
}
