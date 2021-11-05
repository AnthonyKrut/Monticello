let map;
const coord = { lat: 40.67000000000000, lng: -73.90106492319916 };
const pin = document.location.href.replace('index.html', '') + "img/svg/pin.svg";

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: coord,
        zoom: 13,
    });

    const marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        icon: pin,
        animation: google.maps.Animation.DROP,
    });
};
