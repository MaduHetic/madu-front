import React from 'react';
import {Color} from '../../styles/variables';

import CustomButton from './Button';

export default {
    component: CustomButton,
    title: 'Button',
    excludeStories: /.*Data$/,
};

const data = {
    text: 'Test default',
    size: 'medium',
    color: 'primary',
    type: 'button'
};

export const ButtonDefault = () => <CustomButton {...data} />
export const ButtonSmall = () => (
    <>
        <CustomButton text="Default small" size="small" />
        <CustomButton text="Submit small" size="small" type="submit" />
    </>
)
export const ButtonMedium = () => (
    <>
        <CustomButton text="Default medium" size="medium" />
        <CustomButton text="Submit medium" size="medium" type="submit" />
    </>
)
export const ButtonLarge = () => (
    <>
        <CustomButton text="Default large" size="large" />
        <CustomButton text="Submit large" size="large" type="submit" />
    </>
)