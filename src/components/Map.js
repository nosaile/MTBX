import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoibm9zYWlsZSIsImEiOiJjbDB0emc1ZHAwMW5xM2luemd6aHk2YXJzIn0.5tPAhVIwS7bSeTG0BZOaow';



function Map() {


    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-82.2800);
const [lat, setLat] = useState(35.8278);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });


    return (
        
            <div ref={mapContainer} className="map-container" />
        
    )
}

export default Map