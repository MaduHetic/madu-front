import React from 'react';
import CustomButton from '../../components/Button/Button';
import Card from '../../components/Card';
import { Color } from '../../styles/variables';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Wrapper, TitleDefault, ListHeader, ListContainer } from '../../styles/global';
import { Company } from  '../../core/company';

const ClientsList = () => {
    const allCompanies = Company.allCompanies();
    if (!allCompanies) return null;
    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Liste des clients</h3>
                <CustomButton text="Nouveau client" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
            </TitleDefault>
            <ListHeader className="client">
                <div className="name filter active">
                    <p>Nom</p>
                    <ExpandMoreIcon/>
                </div>
                <div className="nbWorkers filter">
                    <p>Nombres d'employés</p>
                    <ExpandMoreIcon/>
                </div>
                <div className="date filter">
                    <p>Date d'ajout</p>
                    <ExpandMoreIcon/>
                </div>
                <div className="type">
                    <p>Type</p>
                </div>
                <div className="actions">
                    <CustomButton text="Filtres" size="small" textcolor={Color.textcolor} backgroundcolor={Color.white} bordercolor={Color.lightgrey2} borderradius={0.2} />
                </div>
            </ListHeader>
            <ListContainer>
                {allCompanies.map(client => (
                    <Card key={client.id} client={client} />
                ))}
            </ListContainer>
        </Wrapper>
    )
}

export default ClientsList;
