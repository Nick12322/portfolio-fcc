$("#navTop").click(function() {
    $('html,body').animate({
        scrollTop: $("#welcome-section").offset().top},
        'slow');
})

$("#navWork").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
})

$("#navContact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactForm").offset().top},
        'slow');
})