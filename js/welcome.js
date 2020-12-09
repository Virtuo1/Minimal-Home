window.onload = welcome()
function welcome() {
    if (localStorage.getItem("name") == null) {
        location = 'welcome'
    } else {
        document.getElementById("name").innerHTML = localStorage.getItem("name")
    }

}