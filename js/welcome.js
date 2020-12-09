window.onload = welcome()
function welcome() {
    if (localStorage.getItem("name") == null) {
        window.location.replace("welcome")
    } else {
        document.getElementById("name").innerHTML = localStorage.getItem("name")
    }

}