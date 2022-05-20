function saveName() {
    var name = document.getElementById('name-value').value
    localStorage.setItem("name", name)
    location = 'index.html'
    return false
}