import React from 'react';
import { BoxStyles } from './Boxes.styles';

const Boxes = (props) => {
    return (
        <BoxStyles bg={props.bg}>
            <img src={props.icon} alt=''/>
            <h1 className='font-semibold'>{props.name}</h1>
        </BoxStyles>
    );
}

export default Boxes;