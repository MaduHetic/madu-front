import React, { useEffect, useState } from 'react';
import { useParams, withRouter, } from 'react-router-dom';
import { Wrapper, TitleDefault, Tag } from '../../styles/global';
import Card from '../../components/card';
import { Company } from  '../../core/company';
import CustomButton from '../../components/button/button';
import { Color } from '../../styles/variables';
import { Formik } from 'formik';


const CompanyUpdate = ({ history }) => {
    const getcompany = company.getcompany();
    const { company } = company.company();
    const updateCompany = company.updateCompany();
    const [searchAddressValues, setSearchAddressValues] = useState({
        address: company?.address,
        city: company?.city,
        postalCode: company?.postalCode,
        long: company?.long,
        lat: company?.lat,
    });
    const { id } = useParams();

    useEffect(() => {
        getcompany(id)
      }, [id]);

    if (!company) return null;
    return (
        <Wrapper>
            <TitleDefault>
              <h3 className="title">{company.name}</h3>
              <CustomButton
                  text="Retour"
                  size="small"
                  textcolor={Color.white}
                  backgroundcolor={Color.lightgrey2}
                  bordercolor={Color.lightgrey2}
                  href={`/clients/fiche/${company.id}`}
              />
            </TitleDefault>
            <Card>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    name: company.name,
                    description: company.description,
                    greenScore: company.greenScore,
                    tags: company.tags,
                    type: company.type,
                    price: company.price,
                    logo: company.logo,
                    typeGreenScore: company.typeGreenScore,
                    dateCreate: company.dateCreate,
                  }}
                  onSubmit={
                    values => {
                      updateCompany(
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
                  <input type="text" name="name" value={values.name} />
              </div>
              <div>
                  <span>Type de fiche :</span>
                  <p>companynt d'intérêt</p>
              </div>
              <div>
                  <span>Categorie :</span>
                  <p>{company.type}</p>
              </div>
              <div className="tagList">
                  <span>Liste des tags :</span>
              </div>
              <div>
                  <span>Fourchette de prix :</span>
                  <p>{company.price}</p>
              </div>
              <div>
                  <span>Description :</span>
                  <p>{company.description}</p>
              </div>
              <div>
                <div>
                  <span>Adresse :</span>
                  <p>{company.address}</p>
                </div>
                <div>
                  <span>Code postal :</span>
                  <p>{company.postalCode}</p>
                </div>
                <div>
                  <span>Ville :</span>
                  <p>{company.city}</p>
                </div>
              </div>
              <div>
                <span>Green Score :</span>
                <p>{company.greenScore}%</p>
              </div>
              <div>
                <span>Logo :</span>
                <div className="logo">
                  <img src={company.logo} alt="logo"/>
                </div>
              </div>
              <div className="groupBtn">
                <CustomButton
                  text="Enregistrer"
                  size="large"
                  textcolor={Color.white}
                  backgroundcolor={Color.main}
                  bordercolor={Color.main}
                  type="submit"
                  href={`/companynt-d-interet/fiche/${company.id}`}
                />
                </div>
            </form>
          )}
        </Formik>
      </Card>
    </Wrapper>
  );
}

export default withRouter(CompanyUpdate);