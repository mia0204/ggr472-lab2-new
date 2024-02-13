mapboxgl.accessToken = 'pk.eyJ1Ijoid3h5dWUwMjA0IiwiYSI6ImNsc2kzd2psZzJkZnMybXF1amZmbjJreWsifQ.Tavjo7Jout4NA8fo4YYY4A';

//creating new mapbox gl class
const map = new mapboxgl.Map({
    container: 'my-map', //map container ID
    style: 'mapbox://styles/wxyue0204/clskmrrfz03t101pbbfp3aswu',
    center: [-79.39, 43.66],
    zoom: 12,
});

//attach an event listener to the load event of the map object
map.on('load', () => {
    
    //add water station and washroom data from a GeoJSON file
    map.addSource('water', {
        type: 'geojson',
        //raw link in github to the geojson file
        data: 'https://raw.githubusercontent.com/mia0204/ggr472-lab2-new/main/Location%20Data.geojson'
    });

    map.addLayer({
        'id': 'water-station',
        'type': 'circle',
        'source': 'water',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#66f0ff',
            'circle-outline-color': 'blue'
        }
    });

    //add green spaces from Mapbox tileset
    map.addSource('toronto-green-space', {
        'type': 'vector',
        'url': 'mapbox://wxyue0204.ah538m6b' //mapbox tileset ID
    });
    
    map.addLayer({
        'id': 'green-spaces',
        'type': 'fill',
        'source': 'toronto-green-space',
        'paint': {
            'fill-color': '#008a37',
            'fill-outline-color': 'green'
        },
        'source-layer': 'Green_Spaces-15pe4g' //Mapbox tileset name
    },);

    //add neighbourhood boundary from Mapbox tileset
    map.addSource('neighbourhood-boundary', {
        'type': 'vector',
        'url': 'mapbox://wxyue0204.bw7o9eut' //mapbox tileset ID
    });

    map.addLayer({
        'id': 'neighbourhoods',
        'type': 'fill',
        'source': 'neighbourhood-boundary',
        'paint': {
            'fill-color': '#ffbf00',
            'fill-opacity': 0.1,
            'fill-outline-color': 'purple',
            //'fill-outline-stroke': 3
        },
        'source-layer': 'Neighbourhoods-bvqqyw' //Mapbox tileset name
    },);

});