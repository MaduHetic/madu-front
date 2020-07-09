import React, { useState, useEffect } from 'react';
import { Wrapper } from '../../styles/global';
import { WrapperTitle, MainTitle } from '../../components/title/style';
import moment from 'moment';
import { Challenge } from '../../core/challenge';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { QTitle, QLabel, QRow } from '../../components/quiz';
import { FormWrapper, Button, } from '../../components/create';

const ChallengeCreation = () => {
  const addChallenge = Challenge.addChallenge();
  const history = useHistory();

  return (
    <Wrapper>
      <WrapperTitle>
        <MainTitle>Ajouter un challenge</MainTitle>
      </WrapperTitle>

      <FormWrapper>
        <Formik
          initialValues={{
            gain: 0,
            description: "",
            publicationDate: moment().format('YYYY-MM-DD').toString()
          }}
          onSubmit={ values => {
            console.log("CHALLENGE", values);
            addChallenge(values);
            setTimeout(() => {
              history.push("/challenge");
            }, 300);
          }}      
          render={({ values }) => (
            <Form>
              <QTitle>Remplir les champs suivants</QTitle>

              <QRow>
                <QLabel>Description</QLabel>
                <Field name="description" type="text" />
              </QRow>

              <QRow>
                <QLabel>Récompense</QLabel>
                <Field name="gain" type="number"/>
              </QRow>

              <QRow>
                <QLabel>Date</QLabel>
                <Field name="publicationDate" type="date" />
              </QRow>

              <Button type="submit" style={{margin:"16px 0 24px 300px"}}>Enregistrer</Button>
            </Form>
          )}
        />
      </FormWrapper>
    </Wrapper>
  )
}

export default ChallengeCreation;