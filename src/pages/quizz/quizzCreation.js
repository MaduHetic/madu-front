import React, { useState, useEffect } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import { Quizz } from  '../../core/quizz';
import { Formik, Form, Field, FieldArray } from 'formik';
import { WrapperTitle, MainTitle } from '../../components/title/style';
import { FormWrapper, Button, } from '../../components/create';
import { QTitle, QLabel, QRow, QLTitle, RedBtn, AddBtn, Separator, ARight } from '../../components/quiz';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const QuizzCreation = () => {
  const registerQuizz = Quizz.addQuizz();
  const history = useHistory();

  return (
    <Wrapper>
      <WrapperTitle>
        <MainTitle>Ajouter un quizz</MainTitle>
      </WrapperTitle>

      <FormWrapper>
        <Formik
          initialValues={{
            theme: {
              theme: "",
              imgBackground: "",
              publicationDate: moment().format('YYYY-MM-DD').toString(),
              duration: 5
            },
            infoQuizz: [{
              question: {
                question: "",
                crystalGain: 0,
                publicationDate: moment().format('YYYY-MM-DD').toString(),
              },
              answers: [
                {
                  answer: "",
                  goodAnswer: true
                },
                {
                  answer: "",
                  goodAnswer: false
                },
                {
                  answer: "",
                  goodAnswer: false
                },
                {
                  answer: "",
                  goodAnswer: false
                },
              ]
            }]
          }}
          onSubmit={ values => {
            let data = values;
            data.infoQuizz.forEach( e => {
              e.question.publicationDate = values.theme.publicationDate;
              e.answers.forEach( e => {
                e.goodAnswer = JSON.parse(e.goodAnswer);
              })
            }) 
            registerQuizz(data);
            history.push("/quizz");
          }}
          render={({ values }) => (

          <Form>
            <QTitle>Remplir les champs suivants</QTitle>
            <QRow>
            <QLabel>
              Nom du quizz
            </QLabel>

            <Field name="theme.theme" />

            </QRow>
            
            <QRow>
              <QLabel>
                Image de fond (URL)
              </QLabel>

              <Field name="theme.imgBackground" />

            </QRow>

            <QRow>
              <QLabel>
                Date de publication
              </QLabel>

              <Field name="theme.publicationDate" type="date" />

            </QRow>

            <QLTitle>
              Liste des questions
            </QLTitle>
            
            <FieldArray 
              name="infoQuizz" 
              render={arrayHelpers => (
                <div>
                  {values.infoQuizz.map((item, index) => (
                    <Separator key={index}>
                      <QRow>
                        <QLabel>Question</QLabel>
                        <Field name={`infoQuizz[${index}].question.question`} />

                        <RedBtn type="button" onClick={() => arrayHelpers.remove(index)}>
                          Supprimer cette question
                        </RedBtn>
                      </QRow>

                      <QRow>
                        <QLabel>Gain</QLabel>
                        <Field name={`infoQuizz[${index}].question.crystalGain`} type="number" />
                      </QRow>

                      { item.answers.map((e, subIndex) => (
                        <QRow key={subIndex}>
                          <QLabel>{ subIndex === 0 ? "Réponses" : " "}</QLabel>
                        
                          <Field name={`infoQuizz[${index}].answers[${subIndex}].answer`} className="mgRight"/>

                          <Field type="radio" value="true" name={`infoQuizz[${index}].answers[${subIndex}].goodAnswer`} className="radio"/>
                          <label>Bonne réponse</label>
                        
                          <Field type="radio" value="false" name={`infoQuizz[${index}].answers[${subIndex}].goodAnswer`} className="radio" />

                          <label>Mauvaise réponse</label>
                        </QRow>
                      ))}
                    </Separator>
                  ))}
                  <AddBtn
                    type="button"
                    onClick={() => arrayHelpers.push({
                      question: {
                        question: "",
                        crystalGain: 0,
                        publicationDate: "2020-01-22",
                      },
                      answers: [
                        {
                          answer: "",
                          goodAnswer: true
                        },
                        {
                          answer: "",
                          goodAnswer: false
                        },
                        {
                          answer: "",
                          goodAnswer: false
                        },
                        {
                          answer: "",
                          goodAnswer: false
                        },
                      ]
                    })}
                  >
                  Ajouter nouvelle question
                  </AddBtn>
                </div>
              )}
            />
            <ARight>
              <Button type="submit">Enregistrer</Button>
            </ARight>
            
          </Form>
          )}
        />

      </FormWrapper>

    </Wrapper>



  )
}

export default QuizzCreation;