import React from 'react';
import styled from 'styled-components';
import { Color, Font } from '../../styles/variables';
import CustomButton from '../../components/button/button';
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
                text="Modifier"
                size="small"
                textcolor={Color.textcolor}
                backgroundcolor={Color.white}
                bordercolor={Color.lightgrey2}
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
                text="Modifier"
                size="small"
                textcolor={Color.textcolor}
                backgroundcolor={Color.white}
                bordercolor={Color.lightgrey2}
              />
            </div>
          </StyleCard>
        )
    } else {
      return <StyleCard>{children}</StyleCard>
    }
}

export default Card;

Card.propTypes = {
    client: PropTypes.object,
    poi: PropTypes.object,
    children: PropTypes.node
};