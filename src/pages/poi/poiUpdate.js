import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Wrapper, TitleDefault, Tag } from '../../styles/global';
import Card from '../../components/card';
import { Poi } from  '../../core/poi';
import CustomButton from '../../components/button/button';
import { Color } from '../../styles/variables';
import { Formik } from 'formik';


const PoiView = ({ history }) => {

    const getPoi = Poi.getPoi();
    const {id} = useParams();
    const poi = Poi.poi();

    useEffect(() => {
        getPoi(id)
      }, [id]);

    if (!poi.poi)  {
        return null;
    } else {
        return (
            <Wrapper>
                <TitleDefault>
                    <h3 className="title">{poi.poi.name}</h3>
                </TitleDefault>
                <Card>
                    <Formik
                        initialValues={{
                        name: "hostnfly",
                        city: 'Paris',
                        description: "",
                        greenScore: "123",
                        tags: [],
                        type: "",
                        price: "low",
                        typeGreenScore: [{}],
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
                        <form onSubmit={handleSubmit}>
                            <div className="titleContent">
                                <h4>Informations générales</h4>
                            </div>
                            <div>
                                <span>Type de fiche :</span>
                                <p>Point d'intérêt</p>
                            </div>
                            <div>
                                <span>Categorie :</span>
                                <p>{poi.poi.type}</p>
                            </div>
                            <div className="tagList">
                                <span>Liste des tags :</span>
                                <div>
                                    {poi.tags.map((tag, index) => (
                                        <Tag
                                        key={`tag__${index}`}
                                        colorRGB={{
                                            r: tag.r,
                                            g: tag.g,
                                            b: tag.b
                                        }}
                                        >
                                            {tag.tag}
                                        </Tag>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span>Fourchette de prix :</span>
                                <p>{poi.poi.price}</p>
                            </div>
                            <div>
                                <span>Description :</span>
                                <p>{poi.poi.description}</p>
                            </div>
                            <div>
                                <div>
                                    <span>Adresse :</span>
                                    <p>{poi.poi.address}</p>
                                </div>
                                <div>
                                    <span>Code postal :</span>
                                    <p>{poi.poi.postalCode}</p>
                                </div>
                                <div>
                                    <span>Ville :</span>
                                    <p>{poi.poi.city}</p>
                                </div>
                            </div>
                            <div>
                                <span>Green Score :</span>
                                <p>{poi.poi.greenScore}%</p>
                            </div>
                            <div>
                                <span>Logo :</span>
                                <div className="logo">
                                    <img src={poi.poi.logo} alt="logo"/>
                                </div>
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
                                    href={`/point-d-interet/fiche/${poi.poi.id}`}
                                    />
                            </div>
                        </form>
                    )}
                    </Formik>
                </Card>
                </Wrapper>
                )
            }
}

export default withRouter(PoiView);