import React, { useEffect, useState, Fragment } from 'react';
import { Formik } from 'formik';
import moment from 'moment';
import { Company } from '../../core/company';
import SearchAddress from '../../components/searchAddress';

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
  const [searchAddressValues, setSearchAddressValues] = useState();

  useEffect(() => {
    getAllCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddress = (values) => {
    return setSearchAddressValues(values);
  }

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
        onSubmit={values => {registerCompany(Object.assign(values, {searchAddressValues}))}}
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
            <SearchAddress handleAddress={handleAddress} />
            <button type="submit">CONNEXION</button>
          </form>
        )}
      </Formik>
    </div>
  );
};


export default CompanyList;