import React, { useEffect, useState } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import CustomButton from '../../components/button/button';
import { KnowIt } from '../../core/knowIt';
import { QCard, QWrap, RedBtn } from '../../components/quiz';

const KnowItList = () => {
  const getKnowIt = KnowIt.getKnowIt();
  const deleteKnowIt = KnowIt.deleteKnowIt();
  const knowItItem =  KnowIt.data();

  useEffect(() => {
    getKnowIt();
  }, []);

  const handleDelete = (id) => {
    deleteKnowIt(id);
  }

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
          <QCard key={knowIt.id} >
            <p className="title">{knowIt.title}</p>
            <p>{knowIt.description}</p>
            <RedBtn type="button" onClick={() => handleDelete(knowIt.id)} className="delete">
              Supprimer
            </RedBtn>
          </QCard>
        ))
      }
      </QWrap>
    </Wrapper>
  )
}

export default KnowItList;