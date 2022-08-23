const openItem = item => {
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__content');
    const textBlock = contentBlock.find('.team__content-block');
    const heightText = textBlock.height();
    container.addClass('active-team');
    contentBlock.height(heightText);
}
const closeEveryBlock = container => {
    const item = container.find('.team__content');
    const itemContainer = container.find('.team__item');
    itemContainer.removeClass('active-team');
    item.height(0);
}

$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest('.team__item');
    if (elemContainer.hasClass('active-team')) {
        closeEveryBlock(container);
    } else {
        closeEveryBlock(container);
        openItem($this);
    }


})