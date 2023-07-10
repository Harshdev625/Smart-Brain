import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className=' Tilt br2 shadow-2' options={{max: 55}} style={{ height: 125, width: 125 }}>
                <div><img alt='brain' src={brain }/></div>
            </Tilt>
        </div>
    );
}

export default Logo;