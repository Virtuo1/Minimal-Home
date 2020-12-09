function search() {
    var search_value = document.getElementById('search-content').value
    window.close()
    window.open('https://duckduckgo.com/?q=' + search_value)
    console.log('https://duckduckgo.com/?q=' + search_value)
}