import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Card from '../../components/card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Wrapper, TitleDefault, ListContainer, ListHeader } from '../../styles/global';
import { Quizz } from  '../../core/quizz';
import CustomButton from '../../components/button/button';
import { QCard, QBackground, QWrap } from '../../components/quiz';
import moment from 'moment';

const QuizzList = () => {
	const getThemes = Quizz.getThemes();
  const themes = Quizz.themes();
  
  const [sortValue, setSortValue] = useState("name");

  const headerList = [
    {name: 'name', label: 'Nom', className: 'name'},
    {name: 'time', label: 'Durée', className: 'time'},
    {name: 'dateCreate', label: 'Date de publication', className: 'date'},
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
            <CustomButton
              text="Ajouter nouveau"
              size="medium"
              href="/quizz/new"
            />
          </span>
        </TitleDefault>

        <QWrap>
          {
            themes.map( quizz => (
              <QCard>
                <QBackground style={{ backgroundImage:`url(${quizz.imgBackground})`}}/>
                <p><b>Nom : </b>{quizz.theme}</p>
                <p><b>Publié le : </b>{moment(quizz.publicationDate).format("L")}</p>
                <p><b>Durée : </b>{quizz.duration}</p>
              </QCard>
            ))
          }
        </QWrap>
      </Wrapper>
    )
}

export default QuizzList;