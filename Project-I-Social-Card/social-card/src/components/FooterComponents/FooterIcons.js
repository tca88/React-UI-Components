import React from 'react';
import './Footer.css';
import speechBubble from './img/speech-bubble.png';
import like from './img/like.png';
import reload from './img/reload.png';
import mail from './img/mail.png';

const FooterIcons = () => {

    return (
        <div className="footer-icons">
        <img className="icon speech-bubble" src={speechBubble} alt="speech bubble icon"/>
        <div className="refresh-content">
            <img className="icon reload" src={reload} alt="reload icon"/>
            <p>6</p>
        </div>
        <div className="like-content">
            <img className="icon like" src={like} alt="like icon"/>
            <p>4</p>
        </div>
        <img className="icon mail" src={mail} alt="mail icon"/>
        </div>

    );

};

export default FooterIcons;