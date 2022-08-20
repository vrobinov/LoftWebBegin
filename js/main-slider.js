const slider = $('.products__list').bxSlider({
    pager: false,
    controls: false,
    adaptiveHeight: true,
    responsive: false

});
$('.products__arrow--prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.products__arrow--next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();

})