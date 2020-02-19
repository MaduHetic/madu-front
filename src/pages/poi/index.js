import React from 'react';
import CustomButton from '../../components/Button/Button';
import { Color, Font } from '../../styles/variables';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Wrapper, TitleDefault } from '../../styles/global';

const ListContainer = styled.div`
    & > div:not(:last-child) {
        margin-bottom: 8px;
    }
    .name {
        font-weight: ${Font.weight.xBold};
        color: ${Color.black};
    }
    .greenscore {
        color: ${Color.green};
    }
`;

const ListHeader = styled.div`
    margin-bottom: 25px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .filter {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        &.active {
            color: ${Color.main};
        }
    }
    p {
        font-size: 12px;
        font-weight: ${Font.weight.bold};
        text-transform: uppercase;
        user-select: none;
    }
`;

const ListItem = styled.div`
    padding: 10px;
    flex-grow: 1;
    &.name {
        max-width: 15%;
    }
    &.greenscore {
        max-width: 20%;
    }
    &.date {
        max-width: 20%;
    }
    &.tags {
        max-width: 20%;
    }
    &.actions {
        max-width: 25%;
        text-align: right;
    }
`;

const CardItem = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${Color.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

const PoiList = () => {
    return (
        <Wrapper>
            <TitleDefault>
                <h3 className="title">Liste des commerces</h3>
                <CustomButton text="Nouveau commerce" size="medium" textcolor={Color.main} backgroundcolor={Color.white} bordercolor={Color.main} />
            </TitleDefault>
            <ListHeader>
                <ListItem className="name filter active">
                    <p>Nom</p>
                    <ExpandMoreIcon/>
                </ListItem>
                <ListItem className="greenscore filter">
                    <p>Greenscore</p>
                    <ExpandMoreIcon/>
                </ListItem>
                <ListItem className="date filter">
                    <p>Date d'ajout</p>
                    <ExpandMoreIcon/>
                </ListItem>
                <ListItem className="tags">
                    <p>Tags</p>
                </ListItem>
                <ListItem className="actions">
                    <p>Filtres</p>
                </ListItem>
            </ListHeader>
            <ListContainer>
                <CardItem>
                    <ListItem className="name">
                        <p>Abava</p>
                    </ListItem>
                    <ListItem className="greenscore">
                        <p>8,85/10</p>
                    </ListItem>
                    <ListItem className="date">
                        <p>29 dec. 2019</p>
                    </ListItem>
                    <ListItem className="tags">
                        <span>Vegan</span>
                        <span>BIO</span>
                    </ListItem>
                    <ListItem className="actions">
                        <CustomButton text="Modifier" size="small" textcolor={Color.textcolor} backgroundcolor={Color.white} bordercolor={Color.lightgrey2} />
                    </ListItem>
                </CardItem>
            </ListContainer>
        </Wrapper>
    )
}

export default PoiList;