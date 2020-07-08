import React, { useState, useEffect } from 'react';
import { Wrapper, TitleDefault } from '../../styles/global';
import { Quizz } from  '../../core/quizz';
import { Formik, Form, Field, FieldArray } from 'formik';
import { WrapperTitle, MainTitle } from '../../components/title/style';
import { FormWrapper, Progress, InputWrapper, Button, ButtonWrapper, Steps, FormHead, Label, Option, OptionLabel, TagContainer } from '../../components/create';
import { QTitle, QLabel, QRow, QLTitle, RedBtn, AddBtn, Separator, ARight } from '../../components/quiz';

const QuizzCreation = () => {
  const registerQuizz = Quizz.addQuizz();

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
              publicationDate: "2000-07-26T00:00:01.967Z"
            },
            infoQuizz: [{
              question: {
                question: "",
                crystalGain: "",
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
            }]
          }}
          onSubmit={ values => {
            // registerQuizz(values);
            console.log("MEGAPUTE", values);
            registerQuizz(values);
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
                        <Field name={`infoQuizz[${index}].question.crystalGain`} />
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
                  
                    {/* <RedBtn type="button" onClick={() => arrayHelpers.remove(index)}>
                      Supprimer cette question
                    </RedBtn> */}
                    </Separator>
                  ))}
                  <AddBtn
                    type="button"
                    onClick={() => arrayHelpers.push({
                      question: {
                        question: "",
                        crystalGain: "",
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