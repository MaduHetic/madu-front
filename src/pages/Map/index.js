import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { Company } from "../../core/company";
import { ButtonContainer } from "./style";
import { Checkbox } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg"
});

const fakeData = [
    {
        name: "La fontaine",
        price: "$",
        long: 2.4183733,
        lat: 48.8511628,
    },
    {
        name: "JUL",
        price: "$$$",
        long: 2.33,
        lat: 48.83,
    },
    {
        name: "WeshAlors",
        price: "$$",
        long: 2.32,
        lat: 48.84,
        type: "client",
        tag: "Agence"
    },
    {
        name: "Oui",
        price: "$",
        long: 2.33,
        lat: 48.8511628,
        type: "client",
        tag: "École"
    },
    {
        name: "Non",
        price: "$$$",
        long: 2.33,
        lat: 48.84,
        type: "POI",
        tag: "restaurant"
    },
    {
        name: "Peut-être",
        price: "$$",
        long: 2.32,
        lat: 48.82,
        type: "POI",
        tag: "bar"
    },
    {
        name: "La fontaine",
        price: "$",
        long: 2.4283733,
        lat: 48.8611628,
    },
    {
        name: "JUL",
        price: "$$$",
        long: 2.34,
        lat: 48.84,
    },
    {
        name: "WeshAlors",
        price: "$$",
        long: 2.33,
        lat: 48.85,
        type: "client"
    },
    {
        name: "Oui",
        price: "$",
        long: 2.34,
        lat: 48.8611628,
        type: "client"
    },
    {
        name: "Non",
        price: "$$$",
        long: 2.34,
        lat: 48.85,
        type: "POI"
    },
    {
        name: "Peut-être",
        price: "$$",
        long: 2.33,
        lat: 48.83,
        type: "POI"
    },
]

const cateClient = ["Agence", "Co-working", "École", "Grand compte", "Start-up", "PME", "Incubateur", "Autre"]
const catePOI = ["Food", "Drink", "Beauty", "Fashion", "Shop", "Autre"]

const MapTest = () => {
    // const companies = Company.allCompanies()
    // const getCompanies = Company.getAllCompanies()
    const map = React.createRef()
    const object = Object.assign(...cateClient.map(k => ({ [k]: false })))

    const [centerAndZoom, setCenterAndZoom] = useState({center: [2.36, 48.858], zoom: [11.8]})
    const [mapFilter, setMapFilter] = useState("")
    const [state, setState] = React.useState(object);

    const filteredData = fakeData
        .filter(data => mapFilter ? data.type === mapFilter : true)
        .filter(data => Object.keys(state).every((k) => !state[k]) ? true : state[data.tag])
    
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    useEffect(() => {
        // getCompanies();
    }, [])

    // console.log(companies)
    // console.log(filteredData)

    return (
        <>
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
                            'red',
                            'client',
                            'blue',
                            'grey'
                        ],
                        'circle-radius': 5,
                        // 'circle-radius': {
                        //     base: 1,
                        //     stops: [[12, 2], [22, 180]]
                        // },
                    }}
                >
                    {filteredData && filteredData.map(POI => (
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
                        />
                    ))}
                </Layer>
            </Map>
            <ButtonContainer>
                <button
                    style={{
                        background: mapFilter === "POI" ? "red" : "white",
                        width: 200,
                        height: 80
                    }}
                    onClick={() => setMapFilter(mapFilter === "POI" ? "" : "POI")}
                >POI</button>
                <button
                    style={{
                        background: mapFilter === "client" ? "red" : "white",
                        width: 200,
                        height: 80
                    }}
                    onClick={() => setMapFilter(mapFilter === "client" ? "" : "client")}
                >Clients</button>
            </ButtonContainer>
            <div style={{
                position: "absolute",
                top: 36,
                right: 20,
                display: mapFilter === "" ? "none" : "block",
                background: "white",
                width: 200,
                padding: "10px 20px"
            }}>

                {mapFilter === "POI" ? (
                    <FormGroup row>
                        {catePOI.map((cate, i) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={state[cate]}
                                    onChange={handleChange(cate)}
                                    value={cate}
                                    color="primary"
                                    />
                                }
                                label={cate}
                                key={`catePOI__${i}`}
                            />
                            ))}
                    </FormGroup>
                            ) : (
                    <FormGroup>
                        {cateClient.map((cate, i) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state[cate]}
                                        onChange={handleChange(cate)}
                                        value={cate}
                                        color="primary"
                                    />
                                }
                                label={cate}
                                key={`cateClient__${i}`}
                            />
                        ))}
                    </FormGroup>
                )}
            </div>
        </>
    );
}

export default MapTest;