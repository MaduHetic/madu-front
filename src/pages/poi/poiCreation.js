import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import SearchAddress from '../../components/searchAddress';
import { Poi } from '../../core/poi';
import { LabelName, Container, Progress, FormWrapper, InputWrapper, Button, ButtonWrapper } from '../../components/create';
import { Input } from '@material-ui/core';
import { TitleDefault } from '../../styles/global';
import CustomButton from '../../components/button/button';
import { Color } from '../../styles/variables';

const inputs = [
	{ name: 'name', label: 'name' },
	{ name: 'type', label: 'type' },
	{ name: 'description', label: 'description' },
	{ name: 'tags', label: 'tags' },
	{ name: 'price', label: 'price' },
	//{ name: 'greenScore', label: 'greenScore' },
	{ name: 'typeGreenScore', label: 'typeGreenScore' },
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
		<Container>
			<TitleDefault>
				<h3 className="title">Fiche POI</h3>
				<CustomButton text="éditer" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
				<CustomButton text="supprimer" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
			</TitleDefault>

			<FormWrapper>
				<Progress>
					<LabelName>Nom</LabelName>
					<LabelName>Type</LabelName>
					<LabelName>Description</LabelName>
					<LabelName>Tags</LabelName>
					<LabelName>Fourchette de prix</LabelName>
					<LabelName>Green Score</LabelName>
					<LabelName>Adresse</LabelName>
				</Progress>

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
					onSubmit={
						values => {
							registerPoi(
								Object.assign(values, searchAddressValues)
							)
						}
					}
				>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
						<form onSubmit={handleSubmit}>
							<InputWrapper>
								<Input
									name="name"
									value={values["name"]}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</InputWrapper>

							<InputWrapper>
								<Input
									name="type"
									value={values["type"]}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</InputWrapper>

							<InputWrapper>
								<Input
									name="description"
									value={values["description"]}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</InputWrapper>

							<InputWrapper>
								<div>TAGS</div>	
							</InputWrapper>

							<InputWrapper>
								<Input
									name="price"
									value={values["price"]}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</InputWrapper>

							<InputWrapper>
								<div>GREENSCORE</div>
							</InputWrapper>
							
							<InputWrapper>
								<SearchAddress handleAddress={handleAddress} />
							</InputWrapper>
							
							<ButtonWrapper>
								<Button type="submit">Ajouter</Button>
							</ButtonWrapper>
						</form>
					)}
			</Formik>

			</FormWrapper>
			
			
			{/* <Formik
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
				onSubmit={
					values => {
						registerPoi(
							Object.assign(values, searchAddressValues)
						)
					}
				}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
						<form onSubmit={handleSubmit}>
							{inputs.map(({ name, label }, i) => (
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
			</Formik> */}
		</Container>
	);
};


export default PoiCreation;