import React, { useState, Fragment, useEffect } from 'react';
import { keysIn } from 'lodash';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import SearchAddress from '../../components/searchAddress';
import { Formik } from 'formik';
import { Company } from '../../core/company';
import { WrapperTitle, MainTitle } from '../../components/title/style';
import { Container, FormWrapper, Progress, InputWrapper, Button, ButtonWrapper, Steps, FormHead, Label, Option, Field, OptionLabel } from '../../components/create';
import { ReactComponent as StepOne } from '../../components/create/svg/step_one.svg';
import { ReactComponent as StepTwo } from '../../components/create/svg/step_two.svg';
import { ReactComponent as StepThree } from '../../components/create/svg/step_three.svg';
import { Input } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { Poi } from '../../core/poi';
import { Tags } from '../../core/tags/';
import Checkbox from '@material-ui/core/Checkbox';

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

const EntityCreate = ({ history }) => {
	const registerCompany = Company.registerCompany();
	const registerPoi = Poi.registerPoi();
	const allTags = Tags.tags();
	const getTags = Tags.getTags();
	const createTag = Tags.createTag();
	const [searchAddressValues, setSearchAddressValues] = useState();
	const [selectedValue, setSelectedValue] = useState('client');
	const [selectedType, setSelectedType] = useState('');
	const [selectedPrice, setSelectedPrice] = useState('');
	const [isClient, setIsClient] = useState(false);
	const [step, setStep] = useState(0);
	const [tagInput, setTagInput] = useState('');

	const [useTag, setTags] = useState();

	const [stateCheckboxes, setStateCheckboxes] = useState(Object.assign(allTags.map(k => ({ [k.id]: false }))));
	  
	const handleChangeCheck = id => event => {
		setStateCheckboxes({ ...stateCheckboxes, [id]: event.target.checked });
	};

	useEffect(() => {
		setTags(Object.keys(stateCheckboxes).filter(key => stateCheckboxes[key]))
	}, [stateCheckboxes])

	useEffect(() => {
		getTags()
	}, [])

	const handleChangeSelectClient = event => {
		setIsClient(event.target.value === "client" ? true : false);
		setSelectedValue(event.target.value);
	};

	const handleChangeSelectType = event => {
		setSelectedType(event.target.value);
	};

	const handleChangeSelectPrice = event => {
		setSelectedPrice(event.target.value);
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
					{ step === 0 &&
						<StepOne />
					}
					{ step === 1 &&
						<StepTwo />
					}
					{ step === 2 &&
						<StepThree />
					}

					<Steps>
						<div className={step === 0 ? "blue" : null}>
							<div>étape 1</div>
							<div>type de fiche</div>
						</div>
						<div className={step === 1 ? "blue" : null}>
							<div>étape 2</div>
							<div>informations générales</div>
						</div>
						<div className={step === 2 ? "blue" : null}>
							<div>étape 3</div>
							<div>legal & contact</div>
						</div>
					</Steps>
				</Progress>

				<Formik
					initialValues={{
						name: "",
						type: "",
						nbWorker: 0,
						beginDeal: moment().format('YYYY-MM-DD').toString(),
						endDeal: moment().format('YYYY-MM-DD').toString(),
						domaineMail: 'nom_de_domaine.com',
						description: "",
						price: "",
						typeGreenScore: [],
						tags: []
					}}
					onSubmit={values => { 
						isClient ? registerCompany(Object.assign(values, {type: selectedType}, searchAddressValues))
						: registerPoi(Object.assign(values, {type: selectedType}, {tags: useTag}, {price: selectedPrice},  searchAddressValues))
					}}
				>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
					<form onSubmit={handleSubmit}>
							{step === 0 &&
							<Fragment>
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

										<OptionLabel className={isClient ? "active" : "inactive"}>
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

										<OptionLabel className={isClient ? null : "active"}>
											poi
										</OptionLabel>
									</Option>
									
								</Field>
										
								<Label className="mgTop">
									Type de Client
								</Label>

								<Field className="mgRight">
									{isClient ? clientTypes.map((v, i) => (
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
									: poiTypes.map((v, i) => (
									
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
							</Fragment>
							}
							{
							(step === 1 && isClient ) && 
							<Fragment>
								<FormHead>
									Informations générales
								</FormHead>

								<Label>
									Nom
								</Label>

								<Field>
									<InputWrapper>
										<Input
											name="name"
											value={values["name"]}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</InputWrapper>
								</Field>

								<Label className="mgTop">
									Nombre d'employés
								</Label>

								<Field>
									<InputWrapper>
										<Input
											name="nbWorker"
											value={values["nbWorker"]}
											onChange={handleChange}
											onBlur={handleBlur}
											type="number"
										/>
									</InputWrapper>
								</Field>

								<Label className="mgTop">
									Nom de domaine
								</Label>

								<Field>
									<InputWrapper>
										<Input
											name="domaineMail"
											value={values["domaineMail"]}
											onChange={handleChange}
											onBlur={handleBlur}
											type="text"
										/>
									</InputWrapper>
								</Field>
							</Fragment>
							}
							{
								(step === 1 && !isClient ) && 
								<Fragment>
									<FormHead>
										Informations générales
									</FormHead>

									<Label>
										Nom
									</Label>

									<Field>
										<InputWrapper>
											<Input
												name="name"
												value={values["name"]}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</InputWrapper>
									</Field>

									<Label className="mgTop">
										Description
									</Label>

									<Field>
										<InputWrapper>
											<Input
												name="description"
												value={values["description"]}
												multiline={true}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</InputWrapper>
									</Field>

									<Label className="mgTop">
										Fourchette de prix
									</Label>

									<Field>
										<Option>
											<Radio
												checked={selectedPrice === "low"}
												onChange={handleChangeSelectPrice}
												value="low"
												name="type"
												color="primary"
											/>
											<OptionLabel>
												Prix bas
											</OptionLabel>
										</Option>

										<Option>
											<Radio
												checked={selectedPrice === "medium"}
												onChange={handleChangeSelectPrice}
												value="medium"
												name="type"
												color="primary"
											/>
											<OptionLabel>
												Prix moyen
											</OptionLabel>
										</Option>

										<Option>
											<Radio
												checked={selectedPrice === "high"}
												onChange={handleChangeSelectPrice}
												value="high"
												name="type"
												color="primary"
											/>
											<OptionLabel>
												Prix élevé
											</OptionLabel>
										</Option>
									</Field>

									<Label className="mgTop">
										Tags
									</Label>

									<Field>
										<div>{allTags.map(tag => (
										<div key={tag.id}>
											<input
												name="ChackboxTagstags"
												type="checkbox"
												onChange={handleChangeCheck(tag.id)}
												value={tag.id}
												id={tag.id}
											/>
											<label htmlFor={tag.id}>{tag.tag}</label>
										</div>
										))}</div>
									</Field>
									<Field>
										<input
											name="createTag"
											type="text"
											onChange={(e) => setTagInput(e.target.value)}
										/>
									</Field>
									<button type='button' onClick={() => createTag({tag: tagInput})}>add tag</button>
									
								</Fragment>
							}
							{
								(step === 2 && isClient ) && 
								<Fragment>
									<FormHead>
										Légal & contacts
									</FormHead>

									<Label>
										Adresse
									</Label>

									<Field>
										<InputWrapper>
											<SearchAddress handleAddress={handleAddress} />
										</InputWrapper>
									</Field>

									<Label className="mgTop">
										Début de licence
									</Label>

									<Field>
										<InputWrapper>
											<Input
												name="beginDeal"
												value={values["beginDeal"]}
												type="date"
												onChange={handleChange}
											/>
										</InputWrapper>	
									</Field>	

									<Label className="mgTop">
										Fin de licence
									</Label>

									<Field>
										<InputWrapper>
											<Input
												name="endDeal"
												value={values["endDeal"]}
												type="date"
												onChange={handleChange}
											/>
										</InputWrapper>	
									</Field>	
								</Fragment>
							}

							{
								(step === 2 && !isClient ) &&

								<Fragment>
									<FormHead>
										Légal & contacts
									</FormHead>

									<Label>
										Adresse
									</Label>

									<Field>
										<InputWrapper>
											<SearchAddress handleAddress={handleAddress} />
										</InputWrapper>
									</Field>
								</Fragment>
							}

							<ButtonWrapper className={ step === 1 || step === 2 ? "between" : "end"}>
								{/* {
									(step === 0 || step === 1 ) &&
									<Button onClick={() => setStep(step + 1)} type="button">Continuer</Button>
								}
								{
									(step === 2 ) &&
									<Button type="submit">Continuer</Button>
								} */}
								{ (step === 0 ) &&
									<Button onClick={() => setStep(step + 1)} type="button">Continuer</Button>
								}
								{ step === 1 &&
									<Fragment>
										<Button onClick={() => setStep(step - 1)} type="button">Retour</Button>
										<Button onClick={() => setStep(step + 1)} type="button">Continuer</Button>
									</Fragment>
								}
								{ step === 2 &&
									<Fragment>
										<Button onClick={() => setStep(step - 1)} type="button">Retour</Button>
										<Button type="submit">Enregistrer</Button>
									</Fragment>
								}
							</ButtonWrapper>
						</form>
						)}
				</Formik>

			</FormWrapper>

		</Container>
	);
};


export default withRouter(EntityCreate);