import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg"
});

const MapTest = () => {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ width: '100%', height: '100vh'}}
        zoom={[11.8]}
        center={[2.36, 48.858]}
        maxBounds={[[2.23, 48.8135], [2.48, 48.9029]]}
      >
        {/* <ToRender /> */}
      </Map>
    );
}

export default MapTest;