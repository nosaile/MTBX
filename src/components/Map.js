import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


function Map() {


    const [viewPort, setViewport] = useState({
        latitude: 45.42,
        longitude: -75.69,
        width: "750px",
        height: "400px",
        zoom: 8
    })
    return (
        <div>
            <ReactMapGL {...viewPort} mapboxAccessToken="pk.eyJ1Ijoibm9zYWlsZSIsImEiOiJjbDB0emc1ZHAwMW5xM2luemd6aHk2YXJzIn0.5tPAhVIwS7bSeTG0BZOaow" onViewportChange={setViewport} />
                
            
        </div>
    )
}

export default Map