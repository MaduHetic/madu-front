import React from 'react';
import Button from '@material-ui/core/Button';
import styled, {css} from 'styled-components';
import {Color, Font} from '../../styles/variables';
import PropTypes from 'prop-types';

const StyleButton = styled(Button)`
    ${props => props.size === 'small' && css`
        padding: 8px 20px !important;
    `}
    ${props => props.size === 'medium' && css`
        padding: 12px 24px !important;
    `}
    ${props => props.size === 'large' && css`
        padding: 16px 28px !important;
    `}
    font-size: ${Font.size.s} !important;
    color: ${props => `${props.textcolor || Color.white } !important`};
    background: ${props => `${props.backgroundcolor || Color.main } !important`};
    border: ${props => `solid 1px ${props.bordercolor || Color.main } !important`};
    border-radius: ${props => `${props.borderradius || 3}rem !important`};
`;

const CustomButton = ({text, size, textcolor, backgroundcolor, bordercolor, borderradius, type}) => (
    <StyleButton
        size={size}
        textcolor={textcolor}
        backgroundcolor={backgroundcolor}
        bordercolor={bordercolor}
        borderradius={borderradius}
        type={type}
    >
        {text}
    </StyleButton>
)

export default CustomButton;

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    textcolor: PropTypes.string,
    backgroundcolor: PropTypes.string,
    bordercolor: PropTypes.string,
    borderradius: PropTypes.number,
    type: PropTypes.string
};