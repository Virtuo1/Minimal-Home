function search() {
    var search_value = document.getElementById('search-value').value
    location = 'https://duckduckgo.com/?q=' + search_value
    console.log('https://duckduckgo.com/?q=' + search_value)
    return false
}