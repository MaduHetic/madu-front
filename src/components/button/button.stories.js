import React from 'react';
import {Color} from '../../styles/variables';

import CustomButton from './button';

export default {
    component: CustomButton,
    title: 'Button',
    excludeStories: /.*Data$/,
};

const data = {
    text: 'Test default',
    size: 'medium',
    textcolor: Color.main,
    backgroundcolor: Color.white,
    bordercolor: Color.main,
    borderradius: 3,
    type: 'button'
};

export const ButtonDefault = () => <CustomButton {...data} />
export const ButtonSmall = () => (
    <>
        <CustomButton text="Default small" size="small" />
        <CustomButton text="Button small" size="small" type="button" />
        <CustomButton text="Submit small" size="small" type="submit" />
        <CustomButton text="Anchor small" size="small" type="anchor" href="#" />
    </>
)
export const ButtonMedium = () => (
    <>
        <CustomButton text="Default medium" size="medium" />
        <CustomButton text="Button medium" size="medium" type="button" />
        <CustomButton text="Submit medium" size="medium" type="submit" />
        <CustomButton text="Anchor medium" size="medium" type="anchor" href="#" />
    </>
)
export const ButtonLarge = () => (
    <>
        <CustomButton text="Default large" size="large" />
        <CustomButton text="Button large" size="large" type="button" />
        <CustomButton text="Submit large" size="large" type="submit" />
        <CustomButton text="Anchor large" size="large" type="anchor" href="#" />
    </>
)
