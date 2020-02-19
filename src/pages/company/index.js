import React, { useEffect, useState, Fragment } from 'react';
import { Formik } from 'formik';
import AlgoliaPlaces from 'algolia-places-react';
import moment from 'moment';
import { Company } from '../../core/company';

// const placesAutocomplete = places({
//   appId: 'S65E4N0B1U',
//   apiKey: 'abb4dc9e4cf72ca1e74c676f49462db9',
// });

const inputs = [
  { name: 'name', label: 'name' },
  { name: 'type', label: 'type' },
  { name: 'nbWorker', label: 'nbWorker' },
  { name: 'beginDeal', label: 'beginDeal' },
  { name: 'endDeal', label: 'endDeal' },
  { name: 'domaineMail', label: 'domaineMail' },
]

const CompanyList = () => {
  const registerCompany = Company.registerCompany();
  const getAllCompanies = Company.getAllCompanies();
  const allCompanies = Company.allCompanies();
  const [ address, setAddress ] = useState();
  const [ country, setCountry ] = useState();
  const [ city, setCity ] = useState();
  const [ lng, setLng ] = useState();
  const [ lat, setLat ] = useState();
  const [ postCode, setPostCode ] = useState();

  useEffect(() => {
    getAllCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(allCompanies);
  return (
    <div>
      <Formik
        initialValues={{ 
          name: "hostnfly",
          type: 'Agence', // co-working, école, autre
          nbWorker: 5,
          beginDeal: moment().format('YYYYMMDD').toString(),
          endDeal: moment().format('YYYYMMDD').toString(),
          domaineMail: 'hostnfly',
        }}
        onSubmit={values => {registerCompany(Object.assign(values, {address, country, lng, lat, postCode, city}))}}
      >
      {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {inputs.map(({name, label}, i) => (
              <Fragment key={i}>
                <label>{label}</label>
                <input
                  type="text"
                  name={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name]}
                />
              </Fragment>
            ))}
            <AlgoliaPlaces
              placeholder='Adresse'
              options={{
                appId: 'pl40ZJQJFIY1',
                apiKey: 'b97d72715d5faff9cb479e0606500f11',
                language: 'fr',
                countries: ['fr'],
              }}
                onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
                  console.log(suggestion);
                  setAddress(suggestion.name);
                  setCountry(suggestion.county);
                  setLng(suggestion.latlng.lng);
                  setLat(suggestion.latlng.lat);
                  setPostCode(suggestion.postcode);
                  setCity(suggestion.city);
                }}
              />
            <button type="submit">CONNEXION</button>
          </form>
        )}
      </Formik>
    </div>
  );
};


export default CompanyList;