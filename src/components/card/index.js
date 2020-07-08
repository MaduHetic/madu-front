import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Color, Font } from '../../styles/variables';
import CustomButton from '../button/button';
import { Tag } from '../../styles/global';
import PropTypes from 'prop-types';

const StyleCard = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${Color.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    & > div {
      padding: 10px;
      flex-grow: 1;
    }
    &.client,
    &.poi {
        .name {
            max-width: 15%;
            font-weight: ${Font.weight.xBold};
            color: ${Color.black};
            p {
              text-transform: capitalize;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
        }
        .date {
            max-width: 20%;
        }
        .actions {
            text-align: right;
        }
    }
    &.client {
        .nbWorkers {
            max-width: 25%;
        }
        .type {
            max-width: 15%;
            p {
              text-transform: capitalize;
            }
        }
        .actions {
          max-width: 25%;
        }
    }
    &.poi {
        .greenscore {
            max-width: 20%;
            color: ${Color.green};
        }
        .tags {
            max-width: 30%;
            overflow: hidden;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            p {
              flex-shrink: 0;
              &:nth-child(n+3) {
                display: none;
              }
            }
        }
        .actions {
          max-width: 15%;
        }
    }
`;

const StyleCardView = styled.div`
  padding: 40px 36px;
  background: ${Color.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  .titleContent {
    padding-bottom: 10px;
    margin-bottom: 40px;
    border-bottom: 1px dashed ${Color.lightgrey2};
    h4 {
      font-size: ${Font.size.l};
      color: ${Color.black};
    }
  }
  & > div:not(.titleContent),
  & form > div:not(.titleContent) {
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    &.tagList {
        align-items: center;
        div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
    }
    &.groupBtn {
      justify-content: flex-end;
    }
    span {
      margin-right: 10px;
      display: block;
      flex-shrink: 0;
      font-weight: ${Font.weight.bold};
      color: ${Color.lightgrey2};
      & + p {
        color: ${Color.black};
      }
    }
    .algolia-places {
      margin-top: -10px;
      width: 500px;
      .ap-suggestion {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
    .MuiInput-root {
      margin-top: -5px;
      font-size: ${Font.size.m};
      &.MuiInput-multiline {
        width: 500px;
      }
    }
    &:not(.tagList) > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
`;

const Card = ({ client, poi, children, quizz }) => {
    if (client) {
        return (
          <StyleCard className="client">
            <div className="name">
              <p>{client.name}</p>
            </div>
            <div className="nbWorkers">
              <p>{client.nbWorker} personne{client.nbWorker > 1 ? 's' : '' }</p>
            </div>
            <div className="date">
              <p>{moment(client.dateCreate).format('L')}</p>
            </div>
            <div className="type">
              <p>{client.type}</p>
            </div>
            <div className="actions">
              <CustomButton
                text="Voir"
                size="small"
                textcolor={Color.textcolor}
                backgroundcolor={Color.white}
                bordercolor={Color.lightgrey2}
                href={`/clients/fiche/${client.id}`}
              />
            </div>
          </StyleCard>
        )
    } else if (poi) {
        return (
          <StyleCard className="poi">
            <div className="name">
              <p>{poi.name}</p>
            </div>
            <div className="greenscore">
              <p>{poi.greenScore}</p>
            </div>
            <div className="date">
              <p>{moment(poi.dateCreate).format('L')}</p>
            </div>
            <div className="tags">
              {poi.tags.map((tag, index) => (
                  <Tag
                      key={`tag__${index}`}
                      colorRGB={{
                          r: tag.r,
                          g: tag.g,
                          b: tag.b
                      }}
                  >
                      {tag.tag}
                  </Tag>
              ))}
            </div>
            <div className="actions">
              <CustomButton
                text="Voir"
                size="small"
                textcolor={Color.textcolor}
                backgroundcolor={Color.white}
                bordercolor={Color.lightgrey2}
                href={`/point-d-interet/fiche/${poi.id}`}
              />
            </div>
          </StyleCard>
        )
    } else if (quizz) {
      return (
        <StyleCard className="client">
          <div className="name">
            <p>{quizz.theme}</p>
          </div>
          <div className="time">
            <p>{quizz.duration} minute{quizz.duration > 1 ? 's' : '' }</p>
          </div>
          <div className="date">
            <p>{moment(quizz.publicationDate).format("L")}</p>
          </div>
          <div className="reward">
            <p>{quizz.reward}</p>
          </div>
        </StyleCard>
      )
    } else {
      return <StyleCardView>{children}</StyleCardView>
    }
}

export default Card;

Card.propTypes = {
    client: PropTypes.object,
    poi: PropTypes.object,
    children: PropTypes.node,
    quizz: PropTypes.object
};