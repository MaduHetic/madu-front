import React from 'react';
import Button from '@material-ui/core/Button';

const ExampleComponents = () => (
    <>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
        <Button variant="contained" color="primary" disableElevation>Disable elevation</Button>
        <br/>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <br/>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" disabled>Disabled</Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">Link</Button>
    </>
)

export default ExampleComponents;