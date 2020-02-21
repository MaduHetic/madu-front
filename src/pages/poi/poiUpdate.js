import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Wrapper, TitleDefault, Tag } from '../../styles/global';
import Card from '../../components/card';
import { Poi } from  '../../core/poi';
import CustomButton from '../../components/button/button';
import { Color } from '../../styles/variables';
import { Formik } from 'formik';
import { Input } from '@material-ui/core';
import SearchAddress from '../../components/searchAddress';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
    {
        value: 'small',
        label: 'Bon marché €',
    },
    {
        value: 'medium',
        label: 'Classique €€',
    },
    {
        value: 'large',
        label: 'Onéreux €€€',
    }
];

const PoiView = ({ history }) => {
    const getPoi = Poi.getPoi();
    const {id} = useParams();
    const { poi } = Poi.poi();
    const updatePoi = Poi.updatePoi();

    const [searchAddressValues, setSearchAddressValues] = useState({
        address: poi?.poi?.address,
        city: poi?.poi?.city,
        postalCode: poi?.poi?.postalCode,
        long: poi?.poi?.long,
        lat: poi?.poi?.lat,
    });

    const [priceValue, setPriceValue] = useState({
        price: poi?.poi?.price,
    });

    const handlePrice = (event) => {
        return setPriceValue(event.target.value);
    };
    
    useEffect(() => {
        getPoi(id)
        return () => {
            getPoi(id)
        }
    }, [id]);
    
    const handleAddress = (values) => {
        return setSearchAddressValues(values);
    }

    if (!poi) return null;

    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">{poi.name}</h3>
            </TitleDefault>
            <Card>
                <Formik
                    initialValues={{
                        name: poi.name,
                        description: poi.description,
                        greenScore: poi.greenScore,
                        tags: poi.tags,
                        type: poi.type,
                        price: poi.price,
                        logo: poi.logo,
                        typeGreenScore: poi.typeGreenScore,
                        dateCreate: poi.dateCreate,
                    }}
                    onSubmit={
                        values => {
                            updatePoi(
                                Object.assign(values, searchAddressValues)
                            )
                        }
                    }
                >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} >
                        <div className="titleContent">
                            <h4>Informations générales</h4>
                        </div>
                        <div>
                            <span>Type de fiche :</span>
                            <p>Point d'intérêt</p>
                        </div>
                        <div>
                            <span>Categorie :</span>
                            <Input
                                name="category"
                                defaultValue={poi.type}
                            />
                        </div>
                        <div className="tagList">
                            <span>Liste des tags :</span>
                        </div>
                        <div>
                            <span>Fourchette de prix :</span>
                            <TextField
                                select
                                value={priceValue}
                                onChange={handlePrice}
                            >
                                {currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div>
                            <span>Description :</span>
                            <TextField
                                multiline
                                rows="4"
                                defaultValue={poi.description}
                            />
                        </div>
                        <div>
                            <span>Adresse :</span>
                            <SearchAddress
                                handleAddress={handleAddress}
                            />
                        </div>
                        <div>
                            <span>Green Score :</span>
                            <Input
                                    name="greenscore"
                                    type="number"
                                    // defaultValue={`${poi.greenScore} %`}
                                    defaultValue={poi.greenScore}
                            />
                        </div>
                        <div>
                            <span>Horaires :</span>
                            <p></p>
                        </div>
                        <div className="groupBtn">
                            <CustomButton
                                text="Enregistrer"
                                size="large"
                                textcolor={Color.white}
                                backgroundcolor={Color.main}
                                bordercolor={Color.main}
                                type="submit"
                                href={`/point-d-interet/fiche/${poi.id}`}
                            />
                        </div>
                    </form>
                )}
                </Formik>
            </Card>
        </Wrapper>
    );
}

export default withRouter(PoiView);