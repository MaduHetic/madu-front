import React, { useState, useEffect } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import { WrapperTitle, MainTitle } from '../../components/title/style';
import moment from 'moment';
import { KnowIt } from '../../core/knowIt';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { QTitle, QLabel, QRow, QLTitle, RedBtn, AddBtn, Separator, ARight } from '../../components/quiz';
import { FormWrapper, Button, } from '../../components/create';

const KnowItCreation = () => {
  const addKnowIt = KnowIt.addKnowIt();
  const history = useHistory();

  return (
    <Wrapper>
      <WrapperTitle>
        <MainTitle>Ajouter un saviez-vous</MainTitle>
      </WrapperTitle>

      <FormWrapper>
        <Formik
          initialValues={{
            title: "",
            description: "",
            publicationDate: moment().format('YYYY-MM-DD').toString()
          }}
          onSubmit={ values => {
            console.log("SAVIEZ-VOUS", values);
            addKnowIt(values);
            setTimeout(() => {
              history.push("/saviez");
            }, 300);
          }}      
          render={({ values }) => (
            <Form>
              <QTitle>Remplir les champs suivants</QTitle>

              <QRow>
                <QLabel>Titre</QLabel>
                <Field name="title" type="text" />
              </QRow>

              <QRow>
                <QLabel>Description</QLabel>
                <Field name="description" type="text"/>
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

export default KnowItCreation;