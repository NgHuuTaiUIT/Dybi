import React from 'react';
import "./Footer.style.scss";
import imgFooter from '../../assets/images/SGallery_logo.png'
const Footer = () => {
    return (
        <div className='w-full footer py-[127px]'>
            <img src={imgFooter} alt="" className='m-auto'/>
        </div>
    );
}

export default Footer;
