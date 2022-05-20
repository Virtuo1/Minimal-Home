let themes = [
    { name: "system", icon: "img/svg/circle-half-stroke-solid.svg" },
    { name: "light", icon: "img/svg/sun-solid.svg" },
    { name: "dark", icon: "img/svg/moon-solid.svg" },
]

let currentTheme = 0;
let themeButtonImg = document.getElementById("theme-button-img");

function toggleTheme() {
    currentTheme++;
    if (currentTheme >= themes.length)
    {
        currentTheme = 0;
    }
    
    setTheme();
    localStorage.setItem("currentTheme", currentTheme);
}

function setTheme() {
    document.body.className = themes[currentTheme].name;
    themeButtonImg.src = themes[currentTheme].icon;
}

window.onload = () => {
    if (localStorage.getItem("currentTheme") != undefined)
    {
        currentTheme = localStorage.getItem("currentTheme");
    }
    setTheme();
}
