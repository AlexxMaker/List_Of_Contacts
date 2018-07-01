import React from 'react';
import './RightSide.css'
import ContactCard from '../../ContactCard/ContactCard.js'

const rightSide = (props) => {
    return (
        <div className="right_side">
            <div className='navigation'>
                <h2>OLOLOO PISH PISH!</h2>
            </div>
            
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        
        </div>
    );
}

export default rightSide;