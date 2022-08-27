const mesureWidth = item => {
    let regItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest('.products-menu');
    const titlesBlocks = container.find('.products-menu__title');
    const titleWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find('.products-menu__container');
    const paddingLeft = parseInt(textContainer.css('padding-left'));
    const paddingRight = parseInt(textContainer.css('padding-right'));

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
        regItemWidth = screenWidth - titleWidth;
    } else {
        regItemWidth = 500;
    }

    return {
        container: regItemWidth,
        textContainer: regItemWidth - paddingLeft - paddingRight
    }

}
const closeEveryHorizonContainer = container => {
    const items = container.find('.products-menu__item');
    const content = container.find('.products-menu__content');
    items.removeClass('products-menu--active');
    content.width(0);
}

const openHorizonItem = item => {
    const hiddenContent = item.find('.products-menu__content');
    const regWidth = mesureWidth(item);
    const textBlock = item.find('.products-menu__container');

    textBlock.width(regWidth.textContainer);

    item.addClass('products-menu--active');
    hiddenContent.width(regWidth.container);


}

$('.products-menu__title').on('click', e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest('.products-menu__item');
    const itemHorizonOpened = item.hasClass('products-menu--active');
    const containerHorizon = $this.closest('.products-menu')

    if (itemHorizonOpened) {
        closeEveryHorizonContainer(containerHorizon);
    } else {
        closeEveryHorizonContainer(containerHorizon);
        openHorizonItem(item);
    }
});

$('.products-menu__close').on('click', e => {
    e.preventDefault();
    closeEveryHorizonContainer($('.products-menu'));
})