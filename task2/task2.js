//Asynchronous-debounce-search

$(document).ready(function () {

    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $('input').keyup(function () {
        var text =  $(this).val();
        delay(function () {
            document.getElementById('textOutput').innerHTML = text;
            console.log(text);
        }, 3000);
    });

});
