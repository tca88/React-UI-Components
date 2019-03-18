import React from 'react';
import './Header.css';
import moment from 'moment';
import TodayDate from './Dates';

const HeaderTitle = () => {
    return (
        <div className="header-title">
        <h1 className="header-h1">Lambda School</h1>
        <p className ="header-handle">@LambdaSchool</p>
        <p className ="header-date">· <TodayDate /></p>
        </div>
    ); 
};

export default HeaderTitle;