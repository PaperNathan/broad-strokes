// Modify the DOM directly with Javascript or JQuery

// Test Code

$('document').ready(function() {
    var colors = '';

    $('.rainbow').mouseover(function() {
        that = this;

        colors = setInterval(function() {
            // Color Picker
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);

            // Saturation Boost
            let maximum = Math.max(r, g, b);

            if (r == maximum) {
                r = 255;
            } else if (g == maximum) {
                g = 255;
            } else {
                b = 255;
            }
    
            // Display Color and Smooth Transition Between Colors
            let rgb = `rgb(${r}, ${g}, ${b})`;
            $(that).css("background", rgb);
        }, 800);
    });

    $('.rainbow').mouseout(function() {
        clearInterval(colors);
    });

});
