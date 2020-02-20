import React, { useEffect, useState, Fragment } from 'react';
import moment from 'moment';
import SearchAddress from '../../components/searchAddress';
import { Formik } from 'formik';
import { Company } from '../../core/company';
import {WrapperTitle, MainTitle} from '../../components/title/style';
import { LabelName, Container, FormWrapper, Progress, InputWrapper, Button, ButtonWrapper, Steps, FormHead } from '../../components/create';
import { ReactComponent as StepOne } from '../../components/Create/svg/step_one.svg';
import { Input } from '@material-ui/core';
import { TitleDefault } from '../../styles/global';
import CustomButton from '../../components/button/button';
import { Color, Font } from '../../styles/variables';

// const placesAutocomplete = places({
//   appId: 'S65E4N0B1U',
//   apiKey: 'abb4dc9e4cf72ca1e74c676f49462db9',
// });

const inputs = [
	{ name: 'name', label: 'Nom' },
	{ name: 'type', label: 'Type' },
	{ name: 'domaineMail', label: 'domaineMail' },
	// { name: 'nbWorker', label: 'nbWorker' },
	{ name: 'beginDeal', label: 'beginDeal' },
	{ name: 'endDeal', label: 'endDeal' },
]

const CompanyList = ({ match }) => {
	const registerCompany = Company.registerCompany();
	const [searchAddressValues, setSearchAddressValues] = useState();
	const edit = true;
	console.log(match.params)
	
	
	const handleAddress = (values) => {
		return setSearchAddressValues(values);
	}

	return (
		<Container>
			<WrapperTitle>
				<MainTitle>Ajouter un client</MainTitle>
			</WrapperTitle>

			<FormWrapper>
				<Progress>
					{/* <LabelName>Nom</LabelName>
					<LabelName>Type</LabelName>
					<LabelName>Nom de domaine</LabelName>
					<LabelName>Nombre d'utilisateurs</LabelName>
					<LabelName>Adresse</LabelName>
					<LabelName>Début licence</LabelName>
					<LabelName>Fin licence</LabelName> */}
					<StepOne></StepOne>
					<Steps>
					<div className="blue">
						<div>étape 1</div>
						<div>type de fiche</div>
					</div>
					<div>
						<div>étape 2</div>
						<div>informations générales</div>
					</div>
					<div>
						<div>étape 3</div>
						<div>legal & contact</div>
					</div>
					</Steps>
				</Progress>

				<Formik
					initialValues={{
						name: "hostnfly",
						type: 'Agence', // co-working, école, autre
						nbWorker: 5,
						beginDeal: moment().format('YYYY-MM-DD').toString(),
						endDeal: moment().format('YYYY-MM-DD').toString(),
						domaineMail: 'hostnfly',
					}}
					onSubmit={values => { registerCompany(Object.assign(values, searchAddressValues)) }}
				>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
							<form onSubmit={handleSubmit}>
								<FormHead>
									Type de fiche
								</FormHead>
								<InputWrapper>
									<Input
										name="name"
										value={values["name"]}
										onChange={handleChange}
									/>
								</InputWrapper>

								<InputWrapper>
									<Input
										name="type"
										value={values["type"]}
										onChange={handleChange}
									/>
								</InputWrapper>

								<InputWrapper>
									< Input
										name="domaineMail"
										value={values["domaineMail"]}
										onChange={handleChange}
									/>
								</InputWrapper>

								<InputWrapper>
									<Input
										name="nbWorker"
										value={values["nbWorker"]}
										type="number"
										onChange={handleChange}
									/>
								</InputWrapper>

								<InputWrapper>
									<SearchAddress handleAddress={handleAddress} />
								</InputWrapper>

								<InputWrapper>
									<Input
										name="beginDeal"
										value={values["beginDeal"]}
										type="date"
										onChange={handleChange}
									/>
								</InputWrapper>

								<InputWrapper>
									<Input
										name="endDeal"
										value={values["endDeal"]}
										type="date"
										onChange={handleChange}
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