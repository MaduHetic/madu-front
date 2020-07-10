import React, { useEffect } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import CustomButton from '../../components/button/button';
import moment from 'moment';
import { Challenge } from '../../core/challenge';
import { QCard, QWrap, RedBtn } from '../../components/quiz';

const ChallengeList = () => {
  const getChallenge = Challenge.getChallenge();
  const challenge = Challenge.data();
  const deleteChallenge = Challenge.deleteChallenge();

  useEffect(() => {
    getChallenge();
  }, []);

  const handleDelete = (id) => {
    deleteChallenge(id);
  }

  return (
    <Wrapper>
      <TitleDefault>
        <h3 className="title">Liste des challenges</h3>
          <span>
            <CustomButton
              text="Ajouter nouveau"
              size="medium"
              href="/challenge/new"
            />
          </span>
      </TitleDefault>

      <QWrap>
      {
        challenge.map ( challenge => (
          <QCard>
            <p className="title">{challenge.description}</p>
            <p><b>Publié le : </b>{moment(challenge.publicationDate).format("L")}</p>
            <p><b>Récompense : </b>{challenge.crystalGain}</p>
            <RedBtn type="button" onClick={() => handleDelete(challenge.id)} className="delete">
              Supprimer
            </RedBtn>
          </QCard>
        ))
      }
      </QWrap>
    </Wrapper>
  )
}

export default ChallengeList;