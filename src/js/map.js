;
let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 13,
        controls: [],
    });
    const coords = [
        [55.740730, 37.622881],
        [55.755966, 37.612641],
        [55.746841, 37.633697]
    ];
    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "image/map/point-map.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);