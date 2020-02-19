import React, { useEffect, useState, Fragment } from 'react';
import { Formik } from 'formik';
import SearchAddress from '../../components/searchAddress';
import { Poi } from '../../core/poi';

const inputs = [
  { name: 'name', label: 'name' },
  { name: 'type', label: 'type' },
  { name: 'description', label: 'description' },
  { name: 'greenScore', label: 'greenScore' },
  { name: 'tags', label: 'tags' },
  { name: 'type', label: 'type' },
  { name: 'price', label: 'price' },
  { name: 'typeGreenScore', label: 'typeGreenScore'},
]

const PoiCreation = () => {
  const registerPoi = Poi.registerPoi();
  const getAllPoi = Poi.getAllPoi();
  const [searchAddressValues, setSearchAddressValues] = useState();

  useEffect(() => {
    getAllPoi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddress = (values) => {
    return setSearchAddressValues(values);
  }

  return (
    <div>
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
        onSubmit={values => {registerPoi(Object.assign(values, {searchAddressValues}))}}
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
            <SearchAddress handleAddress={handleAddress} />
            <button type="submit">CONNEXION</button>
          </form>
        )}
      </Formik>
    </div>
  );
};


export default PoiCreation;