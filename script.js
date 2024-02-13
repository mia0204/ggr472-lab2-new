mapboxgl.accessToken = 'pk.eyJ1Ijoid3h5dWUwMjA0IiwiYSI6ImNsc2kzd2psZzJkZnMybXF1amZmbjJreWsifQ.Tavjo7Jout4NA8fo4YYY4A';

//creating new mapbox gl class
const map = new mapboxgl.Map({
    container: 'my-map', //map container ID
    style: 'mapbox://styles/wxyue0204/clskmrrfz03t101pbbfp3aswu',
    center: [-79.39, 43.66],
    zoom: 10,
});