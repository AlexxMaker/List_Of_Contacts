import React from 'react';
import './LeftSide.css'
import user_face from './images/user_photo.jpg'


const leftSide = (props) => {
    return (
        <div className="left_side">   
                
            <h2 className='contact_info_header'>Contact Info</h2>
                
            <img className='user_face' src={user_face} alt='Your face'/>
            
            <div className="contact_info">
                <p>Name: Aleksey Makarenko</p>
                <p>Occupation: Web Developer</p>
                <p>Company: Freelance</p>
                <p>Cell Phone: +38 (093) 364 48 22</p>
                <p>Email: Alexeus92@mail.ru</p>
            </div>
            
        </div>
    );
}

export default leftSide;