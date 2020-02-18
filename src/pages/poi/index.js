import React, { useEffect, useState, Fragment } from 'react';
import { Formik } from 'formik';
import AlgoliaPlaces from 'algolia-places-react';
import { Poi } from '../../core/poi';
import { Tags } from '../../core/tags';

const inputs = [
  { name: 'name', label: 'name' },
  { name: 'type', label: 'type' },
  { name: 'description', label: 'description' },
  { name: 'greenScore', label: 'greenScore' },
  { name: 'tags', label: 'tags' },
  { name: 'type', label: 'type' },
  { name: 'price', label: 'price' },
]

const PoiCreation = () => {
  const registerPoi = Poi.registerPoi();
  const getAllPoi = Poi.getAllPoi();
  const [ address, setAddress ] = useState();
  const [ lng, setLng ] = useState();
  const [ lat, setLat ] = useState();
  const [ postCode, setPostCode ] = useState();

  useEffect(() => {
    getAllPoi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Formik
        initialValues={{ 
          name: "hostnfly",
          city: 'Paris',
          description: "",
          greenScore: "123",
          tags: [],
          type: [],
          price: "low",
        }}
        onSubmit={values => {registerPoi(Object.assign(values, {address, lng, lat, postCode}))}}
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
                  key={i}
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
                  setLng(suggestion.latlng.lng);
                  setLat(suggestion.latlng.lat);
                  setPostCode(suggestion.postcode);
                }}
              />
            <button type="submit">CONNEXION</button>
          </form>
        )}
      </Formik>
    </div>
  );
};


export default PoiCreation;