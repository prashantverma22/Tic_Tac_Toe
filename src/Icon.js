import React from 'react';
import {MdRadioButtonUnchecked, MdCreate, MdClear } from 'react-icons/md';

const Icon = ({ name }) => {
    switch (name) {
        case 'Circle':
            return <MdRadioButtonUnchecked className='icons' size='2em' />
        case 'Cross':
            return <MdClear className='icons' size='2em' />
        default:
            return <MdCreate className='icons' size='2em' />
    }
}

export default Icon;