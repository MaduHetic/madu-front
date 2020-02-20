import React, { useEffect, useState, Fragment } from 'react';
import moment from 'moment';
import SearchAddress from '../../components/searchAddress';
import { Formik } from 'formik';
import { Company } from '../../core/company';
import {WrapperTitle, MainTitle} from '../../components/Title/style';
import { LabelName, Container, FormWrapper, Progress, InputWrapper, Button, ButtonWrapper, Steps, FormHead, Label, Option, Field, OptionLabel } from '../../components/Create';
import { ReactComponent as StepOne } from '../../components/Create/svg/step_one.svg';
import { Input } from '@material-ui/core';
import { TitleDefault } from '../../styles/global';
import CustomButton from '../../components/Button/Button';
import { Color, Font } from '../../styles/variables';

import Radio from '@material-ui/core/Radio';

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

const clientTypes = [
	"Agence",
	"Co-working",
	"École",
	"Grand compte",
	"Start-up",
	"PME",
	"Incubateur",
	"Autre"
]

const poiTypes = [
"Food",
"Drink",
"Cosmetic",
"Fashion",
"Shopping",
"Activity",
]

const CompanyList = () => {
	const registerCompany = Company.registerCompany();
	const [searchAddressValues, setSearchAddressValues] = useState();
	const [selectedValue, setSelectedValue] = useState('client');
	const [selectedType, setSelectedType ] = useState('');
	// let isClient = true;
	const [isClient, setIsClient] = useState(true);

  const handleChangeSelectClient = event => {
		setIsClient( event.target.value === "client" ? true : false );
    setSelectedValue(event.target.value);
	};
	
	const handleChangeSelectType = event => {
    setSelectedType(event.target.value);
  };
	
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
					<StepOne />
					{/* TODO SECOND STEPS */}

					<Steps>
						<div className="blue">
							{/* TODO DYNAMIC CLASSNAME */}
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

								<Label>
								Sélectionner le type de fiche
								</Label>

								<Field>
									<Option>
										<Radio
											checked={selectedValue === 'client'}
											onChange={handleChangeSelectClient}
        							value="client"
											name="none"
											color="primary"
										/>
									
										<OptionLabel className={ isClient ? "active" : "inactive" }>
											Client
										</OptionLabel>
									</Option>

									<Option>
										<Radio
											checked={selectedValue === 'poi'}
											onChange={handleChangeSelectClient}
        							value="poi"
											name="none"
											color="primary"
										/>
									
										<OptionLabel className={ isClient ? null : "active" }>
											poi
										</OptionLabel>
									</Option>
								</Field>


								<Label className="mgTop">
								Type de Client
								</Label>

								<Field className="mgRight">
									{ isClient ? clientTypes.map((v, i)=> (
										<Option key={i}>
											<Radio
												checked={selectedType === v}
												onChange={handleChangeSelectType}
        								value={v}
												name="type"
												color="primary"
											/>
									
											<OptionLabel>
												{v}
											</OptionLabel>
										</Option>
									))
									: poiTypes.map((v, i)=> (
										<Option key={i}>
											<Radio
												checked={selectedType === v}
												onChange={handleChangeSelectType}
        								value={v}
												name="type"
												color="primary"
											/>
									
											<OptionLabel>
												{v}
											</OptionLabel>
										</Option>
									))
								}
								</Field>

								<ButtonWrapper>
									<Button type="submit">Continuer</Button>
								</ButtonWrapper>
							</form>
						)}
				</Formik>

			</FormWrapper>

		</Container>
	);
};


export default CompanyList;