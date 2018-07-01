import React from 'react';
import './ContactCard.css';
import anon_avatar from "./img/anon.jpg"

const contactCard = (props) => {
    return (
        <div className='contact_card'>
            <img className="avatar" src={anon_avatar}/>    
        </div>
    );
}

export default contactCard;