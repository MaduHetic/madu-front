import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { WrapperTitle, MainTitle } from './style';

export default function Title(props) {
    return (
        <WrapperTitle>
            <MainTitle>{props.text}</MainTitle>
            { props.cta && 
                <Button>{props.cta.text}</Button>
            }
        </WrapperTitle>
    )
}