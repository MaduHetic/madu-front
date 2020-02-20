import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import "moment/locale/fr";
import { Wrapper, TitleDefault } from '../../styles/global';
import CustomButton from '../../components/button/button';
import Card from '../../components/card';
import { Color } from '../../styles/variables';
import { Company } from  '../../core/company';

const ClientView = () => {
    const getCompany = Company.getCompany();
    const {id} = useParams();
    const company = Company.company();
    
    useEffect(() => {
        if (id) getCompany(id)
      }, [id]);

    if (!company)  {
        return null;
    } else {
        return (
            <Wrapper>
                <TitleDefault>
                    <h3 className="title">{company.name}</h3>
                    <CustomButton text="Editer" size="small" textcolor={Color.white} backgroundcolor={Color.main} bordercolor={Color.main} />
                    <CustomButton text="Supprimer" size="small" textcolor={Color.white} backgroundcolor={Color.red} bordercolor={Color.red} />
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
            </Wrapper>
        )
    }
}

export default ClientView;