window.onload = displayClock();
function displayClock() {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    var d = new Date();
    var mm = monthNames[d.getMonth()];
    var dd = d.getDate();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = d.getHours();

    var current_time = hh + ':' + min
    var current_date = mm + ' ' + dd
  
    document.getElementById('time').innerText = current_time;
    document.getElementById('date').innerText = current_date;

    setTimeout(displayClock, 1000);
}