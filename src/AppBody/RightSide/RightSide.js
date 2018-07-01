import React from 'react';
import './RightSide.css'
import ContactCard from '../../ContactCard/ContactCard.js'

const rightSide = (props) => {
    return (
        <div className="right_side">
            <div className='navigation'>
                <h2>OLOLOO PISH PISH!</h2>
            </div>

        <ContactCard name='Aziz' surname='Mrazish'/>
        <ContactCard name='Filipp' surname='Kirkorov'/>
        <ContactCard name='Arkadiy' surname='Ukupnik'/>
        <ContactCard name='Gandalf' surname='Seriy'/>
        <ContactCard name='Sasha' surname='Beliy'/>
        
        </div>
    );
}

export default rightSide;