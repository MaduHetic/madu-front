import React from 'react';
import { Formik } from 'formik';

import { Company } from '../../core/company';

const CompanyList = () => {
  const registerCompany = Company.registerCompany();
  return (
    <div>
      <Formik
        initialValues={{ 
          name: "looool",
          type: 'dfg',
          adresse: 'dfg',
          nbuser: 'dfg',
          contractLength: 'dfg',
          emailDomaine: 'dfg',
        }}
        onSubmit={values => {registerCompany(values);}}
      >
      {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              label="Entrer votre e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <input
              type="text"
              name="type"
              label="Entrer votre mot de passe"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
            />
            <input
              type="text"
              name="adresse"
              label="Entrer votre e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.adresse}
            />
            <input
              type="text"
              name="nbuser"
              label="Entrer votre mot de passe"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nbuser}
            />
            <input
              type="text"
              name="contractLength"
              label="Entrer votre e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contractLength}
            />
            <input
              type="text"
              name="emailDomaine"
              label="Entrer votre mot de passe"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emailDomaine}
            />
            <button type="submit">CONNEXION</button>
          </form>
        )}
      </Formik>
    </div>
  );
};


export default CompanyList;