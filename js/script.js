$(document).ready(function() {
    var w = $(window),
        width,
        color = Math.round(Math.random() * 1000000);
        w.resize(function() {
                width = w.width();
            if (width <= 720) {
                console.log('#' + color);
                $('body').css({
                    'background-color': '#' + color
                });
            } else {
                color = Math.round(Math.random() * 1000000);
                $('body').css({
                    'background-color': '#' + 'fff'
                });
            }
        });
});
