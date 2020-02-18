import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {Color, Font} from '../../styles/variables';
import PropTypes from 'prop-types';

const StyleButton = styled(Button)`
    width: 100%;
    max-width: 172px;
    font-size: ${Font.size.s} !important;
    background: ${props => props.color ? props.color : Color.main } !important;
    border-radius: 2rem !important;
`;

const CustomButton = ({text, size, color, type}) => (
    <StyleButton
        size={size}
        color={color}
        type={type}
    >
        {text}
    </StyleButton>
)

export default CustomButton;

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string,
    type: PropTypes.string
};