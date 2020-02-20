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
    const { poi } = Poi.poi();
    const updatePoi = Poi.updatePoi();

    const [searchAddressValues, setSearchAddressValues] = useState({
        address: poi?.poi?.address,
        city: poi?.poi?.city,
        postalCode: poi?.poi?.postalCode,
        long: poi?.poi?.long,
        lat: poi?.poi?.lat,
    });

    useEffect(() => {
        getPoi(id)
      }, [id]);

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
                    <form onSubmit={handleSubmit}>
              <div className="titleContent">
                  <h4>Informations générales</h4>
                  <input type="text" name="name" />
              </div>
              <div>
                  <span>Type de fiche :</span>
                  <p>Point d'intérêt</p>
              </div>
              <div>
                  <span>Categorie :</span>
                  <p>{poi.type}</p>
              </div>
              <div className="tagList">
                  <span>Liste des tags :</span>
              </div>
              <div>
                  <span>Fourchette de prix :</span>
                  <p>{poi.price}</p>
              </div>
              <div>
                  <span>Description :</span>
                  <p>{poi.description}</p>
              </div>
              <div>
                <div>
                  <span>Adresse :</span>
                  <p>{poi.address}</p>
                </div>
                <div>
                  <span>Code postal :</span>
                  <p>{poi.postalCode}</p>
                </div>
                <div>
                  <span>Ville :</span>
                  <p>{poi.city}</p>
                </div>
              </div>
              <div>
                <span>Green Score :</span>
                <p>{poi.greenScore}%</p>
              </div>
              <div>
                <span>Logo :</span>
                <div className="logo">
                  <img src={poi.logo} alt="logo"/>
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