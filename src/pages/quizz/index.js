import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Card from '../../components/card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Wrapper, TitleDefault, ListContainer, ListHeader } from '../../styles/global';
import { Quizz } from  '../../core/quizz';

const QuizzList = () => {
	const getThemes = Quizz.getThemes();
  const themes = Quizz.themes();
  
  const [sortValue, setSortValue] = useState("name");

  const headerList = [
    {name: 'name', label: 'Nom', className: 'name'},
    {name: 'time', label: 'Durée', className: 'time'},
    {name: 'dateCreate', label: 'Date d\'ajout', className: 'date'},
    {name: 'reward', label: 'Récompense', className: 'reward'},
  ]

  useEffect(() => {
    getThemes()
  }, []);

  return (
    	<Wrapper>
        <TitleDefault>
          <h3 className="title">Liste des quizzs</h3>
          <span>
            <NavLink to="/quizz/new">Ajouter nouveau</NavLink>
          </span>
        </TitleDefault>
        <ListHeader>
          {headerList.map(({name, label, className}) => (
            <div key={name} onClick={() => setSortValue(name)} className={`${className} ${sortValue === name ? 'active': ''} filter`}>
              <p>{label}</p>
              <ExpandMoreIcon/>
            </div>
          ))}
        </ListHeader>
        <ListContainer>
          {
            themes.map( quizz => (
            <Card key={quizz.id} quizz={quizz}/>
            ))
          }
        </ListContainer>
      </Wrapper>
    )
}

export default QuizzList;