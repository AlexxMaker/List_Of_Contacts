import React from 'react';
import './LeftSide.css';
import './../../App.js'



const leftSide = (props) => {

    return (
        <div className="left_side">   
                
            <h2 className='contact_info_header'>Contact Info</h2>
                
            <img className='user_face' src={props.picture} alt='Your face'/>
            
            <div className="contact_info">
                <p>Name: {props.name} {props.surname} </p>
                <p>Occupation: {props.occupation}</p>
                <p>Company: {props.company}</p>
                <p>Cell Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
            
        </div>
    );
  }


export default leftSide;