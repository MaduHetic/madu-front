import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import "moment/locale/fr";
import { Wrapper, TitleDefault, StyledModal } from '../../styles/global';
import CustomButton from '../../components/button/button';
import Card from '../../components/card';
import { Color } from '../../styles/variables';
import { Company } from  '../../core/company';
import Modal from '@material-ui/core/Modal';

const ClientView = ({ history }) => {
    const [open, setOpen] = useState(false);
    const getCompany = Company.getCompany();
    const {id} = useParams();
    const company = Company.company();
    const getAllCompanies = Company.getAllCompanies();
    const deleteClient = Company.deleteCompany();
        
    useEffect(() => {
        if (id) getCompany(id)
        return () => {
            getAllCompanies()
        }
      }, [id]);


    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleDelete = (id) => {
        deleteClient(id)
        setOpen(false);
        history.push('/clients');
    }

    if (!company)  {
        return null;
    } else {
        return (
            <Wrapper>
                <TitleDefault>
                    <h3 className="title">{company.name}</h3>
                    <CustomButton
                        text="Retour"
                        size="small"
                        textcolor={Color.white}
                        backgroundcolor={Color.lightgrey2}
                        bordercolor={Color.lightgrey2}
                        href={`/clients`}
                    />
                    <CustomButton
                        text="Editer"
                        size="small"
                        textcolor={Color.white}
                        backgroundcolor={Color.main}
                        bordercolor={Color.main}
                        href={`/clients/fiche-edit/${company.id}`}
                    />
                    <CustomButton
                        text="Supprimer"
                        size="small"
                        textcolor={Color.white}
                        backgroundcolor={Color.red}
                        bordercolor={Color.red}
                        onClick={handleOpen}
                        type="button"
                    />
                </TitleDefault>
                <Card>
                    <div className="titleContent">
                        <h4>Informations générales</h4>
                    </div>
                    <div>
                        <span>Type de fiche :</span>
                        <p>Entreprise</p>
                    </div>
                    <div>
                        <span>Categorie :</span>
                        <p>{company.type}</p>
                    </div>
                    <div>
                        <span>Nombre d'utilisateur :</span>
                        <p>{company.nbWorker}</p>
                    </div>
                    <div>
                        <span>Domaine du mail :</span>
                        <p>{company.domainMail}</p>
                    </div>
                    <div>
                        <div>
                            <span>Adresse :</span>
                            <p>{company.address}</p>
                        </div>
                        <div>
                            <span>Code postal :</span>
                            <p>{company.postalCode}</p>
                        </div>
                        <div>
                            <span>Ville :</span>
                            <p>{company.city}</p>
                        </div>
                    </div>
                    <div>
                        <span>Début du contrat :</span>
                        <p>{moment(company.beginDeal).format('LL')}</p>
                    </div>
                    <div>
                        <span>Fin du contrat :</span>
                        <p>{moment(company.endDeal).format('LL')}</p>
                    </div>
                </Card>
                <Modal
                      open={open}
                      onClose={handleClose}
                    >
                      <StyledModal>
                        <div className="title">
                          <p>Etes vous de supprimer ?</p>
                          <svg className="closeIcon" onClick={handleClose} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.18294 0L8.02275 6.83981L14.5592 0.303317L15.6664 1.41043L9.12986 7.94692L16 14.8171L14.8171 16L7.94692 9.12986L1.42559 15.6512L0.318484 14.5441L6.83981 8.02275L0 1.18294L1.18294 0Z" fill="#6A6A85"/>
                        </svg>
                        </div>
                        <div className="modalContent">
                            <div className="groupBtn">
                                <CustomButton
                                    text="Oui"
                                    size="medium"
                                    textcolor={Color.white}
                                    backgroundcolor={Color.red}
                                    bordercolor={Color.red}
                                    onClick={() => handleDelete(company.id)}
                                    type="button"
                                />
                                <CustomButton
                                    text="Non"
                                    size="medium"
                                    textcolor={Color.black}
                                    backgroundcolor={Color.lightgrey2}
                                    bordercolor={Color.black}
                                    onClick={handleClose}
                                    type="button"
                                />
                            </div>
                        </div>
                      </StyledModal>
                    </Modal>
            </Wrapper>
        )
    }
}

export default ClientView;