import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { Company } from "../../core/company";
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg"
});

const fakeData = [
    {
        name: "La fontaine",
        price: "$",
        // description,
        // address,
        // city,
        // postalCode,
        long: 2.4183733,
        lat: 48.8511628,
        // greenScore,
        // logo
    },
    {
        name: "JUL",
        price: "$$$",
        // description,
        // address,
        // city,
        // postalCode,
        long: 2.33,
        lat: 48.83,
        // greenScore,
        // logo
    },
    {
        name: "WeshAlors",
        price: "$$",
        // description,
        // address,
        // city,
        // postalCode,
        long: 2.32,
        lat: 48.84,
        type: "client"
        // greenScore,
        // logo
    },
    {
        name: "Oui",
        price: "$",
        // description,
        // address,
        // city,
        // postalCode,
        long: 2.33,
        lat: 48.8511628,
        type: "client"
        // greenScore,
        // logo
    },
    {
        name: "Non",
        price: "$$$",
        // description,
        // address,
        // city,
        // postalCode,
        long: 2.33,
        lat: 48.84,
        type: "POI"
        // greenScore,
        // logo
    },
    {
        name: "Peut-être",
        price: "$$",
        // description,
        // address,
        // city,
        // postalCode,
        long: 2.32,
        lat: 48.82,
        type: "POI"
        // greenScore,
        // logo
    },
]

const MapTest = () => {
    const companies = Company.allCompanies()
    const getCompanies = Company.getAllCompanies()
    const map = React.createRef();
    const [centerAndZoom, setCenterAndZoom] = useState({center: [2.36, 48.858], zoom: [11.8]});


    useEffect(() => {
        getCompanies();
    }, [])

    console.log(companies)

    return (
        <Map
            ref={map}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{ width: '100%', height: '100vh'}}
            zoom={centerAndZoom.zoom}
            center={centerAndZoom.center}
            maxBounds={[[2.23, 48.8135], [2.48, 48.9029]]}
        >
            <Layer
                type="circle"
                id="marker"
                paint={{
                    'circle-color': [
                        'match',
                        ['get', 'type'],
                        'POI',
                        'green',
                        'client',
                        'blue',
                        /* other */ 'red'
                        ]
                }}
            >
                {fakeData && fakeData.map(POI => (
                    <Feature
                        key={`POI__${POI.name}`}
                        coordinates={[POI.long, POI.lat]}
                        onClick={e => {
                            setCenterAndZoom({center: [e.lngLat.lng, e.lngLat.lat], zoom: [14]});
                            console.log("Name: ", e.feature.properties.name)
                        }}
                        properties={{
                            name: POI.name,
                            type: POI.type
                        }}
                        geometry={{'circle-color': "blue"}}
                    />
                ))}
            </Layer>
        </Map>
    );
}

export default MapTest;