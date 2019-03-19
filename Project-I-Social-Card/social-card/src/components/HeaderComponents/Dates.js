import React from 'react';
import './Header.css';
import moment from "moment";

const TodayDate = () => {
    return moment().format("Do MMM");
};

export default TodayDate;