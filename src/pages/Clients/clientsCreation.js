import React, { useEffect, useState, Fragment } from 'react';
import moment from 'moment';
import SearchAddress from '../../components/searchAddress';
import { Formik } from 'formik';
import { Company } from '../../core/company';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../../components/Title/index';
import { LabelName, Container, FormWrapper, Labels, InputWrapper, Button, ButtonWrapper } from '../../components/Label';
import { Input } from '@material-ui/core';
import { TitleDefault } from '../../styles/global';
import CustomButton from '../../components/Button/Button';
import { Color, Font } from '../../styles/variables';

// const placesAutocomplete = places({
//   appId: 'S65E4N0B1U',
//   apiKey: 'abb4dc9e4cf72ca1e74c676f49462db9',
// });

const useStyles = makeStyles({
	input: {
		flexGrow: "1",
	}
});

const inputs = [
	{ name: 'name', label: 'name' },
	{ name: 'type', label: 'type' },
	// { name: 'nbWorker', label: 'nbWorker' },
	{ name: 'beginDeal', label: 'beginDeal' },
	{ name: 'endDeal', label: 'endDeal' },
	{ name: 'domaineMail', label: 'domaineMail' },
]

const CompanyList = () => {
	const registerCompany = Company.registerCompany();
	const getAllCompanies = Company.getAllCompanies();
	const allCompanies = Company.allCompanies();
	const [address, setAddress] = useState();
	const [country, setCountry] = useState();
	const [city, setCity] = useState();
	const [lng, setLng] = useState();
	const [lat, setLat] = useState();
	const [postCode, setPostCode, searchAddressValues, setSearchAddressValues] = useState();
	const classes = useStyles();

	const handleAddress = (values) => {
		return setSearchAddressValues(values);
	}

	useEffect(() => {
		getAllCompanies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	console.log(allCompanies);
	return (
		<Container>
			{/* <Title
        text="Ajouter un client"
      /> */}
			<TitleDefault>
				<h3 className="title">Fiche client</h3>
				<CustomButton text="éditer" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
				<CustomButton text="supprimer" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
			</TitleDefault>

			<FormWrapper>
				<Labels>
					<LabelName>Nom</LabelName>
					<LabelName>Type</LabelName>
					<LabelName>Nom de domaine</LabelName>
					<LabelName>Nombre d'utilisateurs</LabelName>
					<LabelName>Adresse</LabelName>
					<LabelName>Début licence</LabelName>
					<LabelName>Fin licence</LabelName>
				</Labels>

				<Formik
					initialValues={{
						name: "hostnfly",
						type: 'Agence', // co-working, école, autre
						nbWorker: 5,
						beginDeal: moment().format('YYYY-MM-DD').toString(),
						endDeal: moment().format('YYYY-MM-DD').toString(),
						domaineMail: 'hostnfly',
					}}
					onSubmit={values => { registerCompany(Object.assign(values, { address, country, lng, lat, postCode, city })) }}
				>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
							<form onSubmit={handleSubmit}>
								{/* {inputs.map(({name, label}, i) => (
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
              <input 
              onChange={handleChange}
              type="number"
              name="nbWorker"
              value={values["nbWorker"]}  
              ></input> */}

								<InputWrapper>
									<Input
										name="name"
										value={values["name"]}
										onChange={handleChange}
										disabled
										classes={{
											root: classes.input
										}}
									/>
								</InputWrapper>

								<InputWrapper>
									<Input
										name="type"
										value={values["type"]}
										onChange={handleChange}
										classes={{
											root: classes.input
										}}
									/>
								</InputWrapper>

								<InputWrapper>
									< Input
										name="domaineMail"
										value={values["domaineMail"]}
										onChange={handleChange}
										classes={{
											root: classes.input
										}}
									/>
								</InputWrapper>

								<InputWrapper>
									<Input
										name="nbWorker"
										value={values["nbWorker"]}
										type="text"
										onChange={handleChange}
										classes={{
											root: classes.input
										}}
									/>
								</InputWrapper>

								<InputWrapper>
									{/* <AlgoliaPlaces
                  placeholder='Adresse'
                  options={{
                    appId: 'pl40ZJQJFIY1',
                    apiKey: 'b97d72715d5faff9cb479e0606500f11',
                    language: 'fr',
                    countries: ['fr'],
                  }}
                  className="algolia"
                  onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
                    console.log(suggestion);
                    setAddress(suggestion.name);
                    setCountry(suggestion.county);
                    setLng(suggestion.latlng.lng);
                    setLat(suggestion.latlng.lat);
                    setPostCode(suggestion.postcode);
                    setCity(suggestion.city);
                  }}
                /> */}
									<SearchAddress handleAddress={handleAddress} />
								</InputWrapper>

								<InputWrapper>
									<Input
										name="beginDeal"
										value={values["beginDeal"]}
										type="date"
										onChange={handleChange}
										classes={{
											root: classes.input
										}}
									/>
								</InputWrapper>

								<InputWrapper>
									<Input
										name="endDeal"
										value={values["endDeal"]}
										type="date"
										onChange={handleChange}
										classes={{
											root: classes.input
										}}
									/>
								</InputWrapper>

								<ButtonWrapper>
									<Button type="submit">Ajouter</Button>
								</ButtonWrapper>
							</form>
						)}
				</Formik>

			</FormWrapper>

		</Container>
	);
};


export default CompanyList;