import React, { useState, useEffect } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import { Quizz } from  '../../core/quizz';
import CustomButton from '../../components/button/button';
import { QCard, QBackground, QWrap } from '../../components/quiz';
import moment from 'moment';

const QuizzList = () => {
	const getThemes = Quizz.getThemes();
  const themes = Quizz.themes();

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