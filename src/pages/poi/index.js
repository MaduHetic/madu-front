import React from 'react';
import CustomButton from '../../components/Button/Button';
import Card from '../../components/Card';
import { Color } from '../../styles/variables';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Wrapper, TitleDefault, ListHeader, ListContainer } from '../../styles/global';
import { Poi } from  '../../core/poi';

const PoiList = () => {
    const allPoi = Poi.allPoi();
    if (!allPoi) return null;
    
    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Liste des commerces</h3>
                <CustomButton text="Nouveau commerce" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
            </TitleDefault>
            <ListHeader className="poi">
                <div className="name filter active">
                    <p>Nom</p>
                    <ExpandMoreIcon/>
                </div>
                <div className="greenscore filter">
                    <p>Greenscore</p>
                    <ExpandMoreIcon/>
                </div>
                <div className="date filter">
                    <p>Date d'ajout</p>
                    <ExpandMoreIcon/>
                </div>
                <div className="tags">
                    <p>Tags</p>
                </div>
                <div className="actions">
                    <CustomButton text="Filtres" size="small" textcolor={Color.textcolor} backgroundcolor={Color.white} bordercolor={Color.lightgrey2} borderradius={0.2} />
                </div>
            </ListHeader>
            <ListContainer>
                {allPoi.map(poi => (
                    <Card key={poi.id} poi={poi} />
                ))}
            </ListContainer>
        </Wrapper>
    )
}

export default PoiList;
