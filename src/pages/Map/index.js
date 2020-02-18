import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import { Company } from "../../core/company";
import { ButtonContainer, ButtonFilter, CheckboxesContainer, DescriptionContainer } from "./style";
import { Checkbox } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg"
});

const fakeData = [
    {
        id: 0,
        name: "La fontaine",
        price: "$",
        long: 2.4183733,
        lat: 48.8511628,
    },
    {
        id: 1,
        name: "JUL",
        price: "$$$",
        long: 2.33,
        lat: 48.83,
    },
    {
        id: 2,
        name: "WeshAlors",
        price: "$$",
        long: 2.32,
        lat: 48.84,
        type: "client",
        tag: "Agence"
    },
    {
        id: 3,
        name: "Oui",
        price: "$",
        long: 2.33,
        lat: 48.8511628,
        type: "client",
        tag: "École"
    },
    {
        id: 4,
        name: "Non",
        price: "$$$",
        long: 2.33,
        lat: 48.84,
        type: "POI",
        tag: "restaurant"
    },
    {
        id: 5,
        name: "Peut-être",
        price: "$$",
        long: 2.32,
        lat: 48.82,
        type: "POI",
        tag: "bar"
    },
    {
        id: 6,
        name: "La fontaine",
        price: "$",
        long: 2.4283733,
        lat: 48.8611628,
    },
    {
        id: 7,
        name: "JUL",
        price: "$$$",
        long: 2.34,
        lat: 48.84,
    },
    {
        id: 8,
        name: "WeshAlors",
        price: "$$",
        long: 2.33,
        lat: 48.85,
        type: "client"
    },
    {
        id: 9,
        name: "Oui",
        price: "$",
        long: 2.34,
        lat: 48.8611628,
        type: "client"
    },
    {
        id: 10,
        name: "Non",
        price: "$$$",
        long: 2.34,
        lat: 48.85,
        type: "POI"
    },
    {
        id: 11,
        name: "Peut-être",
        price: "$$",
        long: 2.33,
        lat: 48.83,
        type: "POI"
    }
]

const cateClient = ["Agence", "Co-working", "École", "Grand compte", "Start-up", "PME", "Incubateur", "Autre"]
const catePOI = ["Food", "Drink", "Beauty", "Fashion", "Shop", "Autre"]

const MapTest = () => {
    // const companies = Company.allCompanies()
    // const getCompanies = Company.getAllCompanies()
    const map = React.createRef()
    const initStateCheckboxes = Object.assign(...cateClient.map(k => ({ [k]: false })))

    const [centerAndZoom, setCenterAndZoom] = useState({center: [2.36, 48.858], zoom: [11.8]})
    const [mapFilter, setMapFilter] = useState("")
    const [stateCheckboxes, setStateCheckboxes] = useState(initStateCheckboxes);
    const [currentEntity, setCurrentEntity] = useState(null);

    const filteredData = fakeData
        .filter(data => mapFilter ? data.type === mapFilter : true)
        .filter(data => Object.keys(stateCheckboxes).every(key => !stateCheckboxes[key]) ? true : stateCheckboxes[data.tag])
    
    const handleChange = name => event => {
        setStateCheckboxes({ ...stateCheckboxes, [name]: event.target.checked });
    };

    const resetAndChangeFilters = id => {
        setMapFilter(id);
        switch (id) {
            case "POI":
                setStateCheckboxes(Object.assign(...catePOI.map(k => ({ [k]: false }))))
                break;
            case "client":
                setStateCheckboxes(Object.assign(...cateClient.map(k => ({ [k]: false }))))  
                break;
            default:
                setStateCheckboxes({})  
                break;
        }
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
                                // console.log("Name: ", e.feature.properties.name)
                                setCurrentEntity(POI)
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
                <ButtonFilter isActive={mapFilter === ""} onClick={() => resetAndChangeFilters("")}>ALL</ButtonFilter>
                <ButtonFilter isActive={mapFilter === "POI"} onClick={() => resetAndChangeFilters("POI")}>POI</ButtonFilter>
                <div />
                <ButtonFilter isActive={mapFilter === "client"} onClick={() => resetAndChangeFilters("client")}>Clients</ButtonFilter>
            </ButtonContainer>
            <CheckboxesContainer isDisplayed={mapFilter !== ""}>
                <h3>Filtres</h3>
                {mapFilter === "POI" ? (
                    <FormGroup>
                        {catePOI.map((cate, i) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={stateCheckboxes[cate]}
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
                                        checked={stateCheckboxes[cate]}
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
            </CheckboxesContainer>
            <DescriptionContainer isDisplayed={currentEntity}>
                <p>TEST</p>
            </DescriptionContainer>
        </>
    );
}

export default MapTest;