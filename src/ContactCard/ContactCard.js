import React from 'react';
import './ContactCard.css';
import anon_avatar from "./img/anon.jpg"

const contactCard = (props) => {
    return (
        <div className='contact_card' onClick={props.click}>
            <div className='avatar-wrapper'>   
                <img className="avatar" src={anon_avatar} alt='Nothing here'/>
            </div>

            <div className='contact_info'>
                <p>Name: {props.name}</p>
                <p>Surname: {props.surname}</p>
                <p>Phone: {props.phone}</p>
            </div>    
        </div>
    );
}

export default contactCard;