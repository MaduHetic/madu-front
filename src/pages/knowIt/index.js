import React, { useState, useEffect } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import CustomButton from '../../components/button/button';
import moment from 'moment';
import { KnowIt } from '../../core/knowIt';
import { QCard, QWrap } from '../../components/quiz';

const KnowItList = () => {
  const getKnowIt = KnowIt.getKnowIt();
  const knowItItem = KnowIt.data();

  useEffect(() => {
    getKnowIt()
  }, []);

  return (
    <Wrapper>
      <TitleDefault>
        <h3 className="title">Liste des saviez-vous</h3>
          <span>
            <CustomButton
              text="Ajouter nouveau"
              size="medium"
              href="/saviez/new"
            />
          </span>
      </TitleDefault>

      <QWrap>
      {
        knowItItem.map ( knowIt => (
          <QCard>
            <p className="title">{knowIt.title}</p>
            <p>{knowIt.description}</p>
          </QCard>
        ))
      }
      </QWrap>
    </Wrapper>
  )
}

export default KnowItList;