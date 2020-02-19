import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { Company } from "../../core/company";
import { Poi } from "../../core/poi";
import { ButtonContainer, ButtonFilter, CheckboxesContainer } from "./style";
import { Checkbox } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ModalDescription from '../../components/ModalDescription/index';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg"
});

const MapTest = () => {
    const companies = Company.allCompanies() || [];
    const companyTypes = Company.companyTypes() || [];
    const poi = Poi.allPoi() || [];
    const poiTypes = Poi.poiTypes() || [];

    const map = React.createRef()
    const initStateCheckboxes = Object.assign(...companyTypes.map(k => ({ [k]: false })))

    const [centerAndZoom, setCenterAndZoom] = useState({center: [2.36, 48.858], zoom: [11.8]})
    const [mapFilter, setMapFilter] = useState("")
    const [stateCheckboxes, setStateCheckboxes] = useState(initStateCheckboxes);
    const [currentEntity, setCurrentEntity] = useState(null);
    const [currentEntityHover, setCurrentEntityHover] = useState(null);

    const filteredData = mapFilter === "POI" ? 
        poi.filter(data => Object.keys(stateCheckboxes).every(key => !stateCheckboxes[key]) ? true : stateCheckboxes[data.type]) :
        mapFilter === "client" ?
        companies.filter(data => Object.keys(stateCheckboxes).every(key => !stateCheckboxes[key]) ? true : stateCheckboxes[data.type]) :
        [...poi, ...companies];
    
    const handleChange = name => event => {
        setStateCheckboxes({ ...stateCheckboxes, [name]: event.target.checked });
    };

    const resetAndChangeFilters = id => {
        setMapFilter(id);
        switch (id) {
            case "POI":
                setStateCheckboxes(Object.assign(...poiTypes.map(k => ({ [k]: false }))))
                break;
            case "client":
                setStateCheckboxes(Object.assign(...companyTypes.map(k => ({ [k]: false }))))  
                break;
            default:
                setStateCheckboxes({})  
                break;
        }
    };

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
                            ['get', 'isPoi'],
                            1,
                            'red',
                            0,
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
                    {filteredData && filteredData.map(entity => (
                        <Feature
                            key={`entity__${entity.name}`}
                            coordinates={[entity.long, entity.lat]}
                            onClick={e => {
                                setCenterAndZoom({center: [e.lngLat.lng, e.lngLat.lat], zoom: [14]});
                                setCurrentEntity(entity)
                            }}
                            onMouseEnter={e => setCurrentEntityHover(entity)}
                            onMouseLeave={e => setCurrentEntityHover(null)}
                            properties={{
                                isPoi: entity.isPoi,
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
                        {poiTypes.map((cate, i) => (
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
                                key={`poiTypes__${i}`}
                            />
                            ))}
                    </FormGroup>
                            ) : (
                    <FormGroup>
                        {companyTypes.map((cate, i) => (
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
                                key={`companyTypes__${i}`}
                            />
                        ))}
                    </FormGroup>
                )}
            </CheckboxesContainer>
            {(currentEntity || currentEntityHover) && (
                <ModalDescription
                    currentEntity={currentEntity}
                    currentEntityHover={currentEntityHover}
                    setCurrentEntity={() => setCurrentEntity(null)}
                />
            )}
        </>
    );
}

export default MapTest;