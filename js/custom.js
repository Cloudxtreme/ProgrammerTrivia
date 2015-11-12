var $slider = $('.slider');
var $toggleButton = $('.toggle-solution');

// Hide solutions by default
$slider.find('.solution').hide();

$slider.slick({
    lazyLoad: 'ondemand',
    arrows: false,
});

$slider.on('swipe', function(event, slick, direction) {
    // Hide solutions, show questions
    $slider.find('.solution').hide();
    $slider.find('.question').show();

    $toggleButton.text("Answer");
});

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // Attempt to hide the solution on the next page a bit sooner
    $(nextSlide).find('.solution').hide();
    $(nextSlide).find('.question').show();
});

$toggleButton.click(function() {
    // Hide questions, show solutions
    $slider.find('.solution').toggle();
    $slider.find('.question').toggle();

    $toggleButton.text(function(i, text) {
        return text === "Question" ? "Answer" : "Question";
    });
});
