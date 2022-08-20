const findBlockByAlias = alias => {
    return $('.reviews__item').filter((ndx, item) => {
        return $(item).attr('data-box-review') === alias;
    });
};

$('.interactive-avatar__link').click(e => {
    e.preventDefault();

    const $link = $(e.currentTarget);
    const target = $link.attr('data-open');
    const itemToShow = findBlockByAlias(target);
    const curItem = $link.closest('.interactive-avatar');
    itemToShow.addClass('reviews-active').siblings().removeClass('reviews-active');
    curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
})