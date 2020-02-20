import React from 'react';
import styled from 'styled-components';
import { Color, Font } from '../../styles/variables';
import CustomButton from '../../components/Button/Button';
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
            max-width: 25%;
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
    }
    &.poi {
        .greenscore {
            max-width: 20%;
            color: ${Color.green};
        }
        .tags {
            max-width: 20%;
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
  & > div:not(.titleContent) {
    margin-bottom: 40px;
    max-width: 560px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
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
  }
`;

const Card = ({ client, poi, children }) => {
    if (client) {
        return (
          <StyleCard className="client">
            <div className="name">
              <p>{client.name}</p>
            </div>
            <div className="nbWorkers">
              <p>{client.nbWorker}</p>
            </div>
            <div className="date">
              <p>{client.date}</p>
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
                type="anchor"
                href={`/clients/fiche/:${client.id}`}
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
              <p>{poi.date}</p>
            </div>
            <div className="tags">
              {poi.tags.map(({tag}) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
            <div className="actions">
              <CustomButton
                text="Voir"
                size="small"
                textcolor={Color.textcolor}
                backgroundcolor={Color.white}
                bordercolor={Color.lightgrey2}
                type="anchor"
                href="#"
                href={`/point-d-interet/fiche/:${poi.id}`}
              />
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
    children: PropTypes.node
};