import React, {Component} from 'react';
import './RightSide.css';
import ContactCard from '../../ContactCard/ContactCard.js';
import user_1_pic from './images/user_1.jpg';
import user_2_pic from './images/user_2.jpg';
import user_3_pic from './images/user_3.jpg';
import user_4_pic from './images/user_4.jpg';
import user_5_pic from './images/user_5.jpg';
import './../../App.js'
import App from './../../App.js';

class rightSide extends Component {
    state = {
        contacts: [
            {id: '1', name: 'Soroka', surname: 'STALKER', phone: '+38(099)937 99 92', picture: user_1_pic },
            {id: '2', name: 'Guy', surname: 'Fox', phone: '+38(097)937 14 88', picture: user_2_pic },
            {id: '3', name: 'Adolf', surname: 'Hitler', phone: '+38(063)923 91 11', picture: user_3_pic },
            {id: '4', name: 'Iosif', surname: 'Stalin', phone: '+38(066)437 59 43', picture: user_4_pic },
            {id: '5', name: 'Arnold', surname: 'Schwarzenegger', phone: '+38(073)927 19 93', picture: user_5_pic }
        ],
        name: 'pidaras', 
    };

    deleteContactHandler = (contactIndex) => {
        const contacts = [...this.state.contacts];
        contacts.splice(contactIndex, 1);
        this.setState({contacts: contacts});
      };

    sortByName = () => {
        const contacts = [...this.state.contacts];
        contacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }

            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        this.setState({contacts: contacts});
    };

    sortBySurname = () => {
        const contacts = [...this.state.contacts];
        contacts.sort((a, b) => {
            if (a.surname > b.surname) {
                return 1;
            }

            if (a.surname < b.surname) {
                return -1;
            }
            return 0;
        });
        this.setState({contacts: contacts});
    };

    nameStateChange = (App) => {
        // const name = 'Alex';
        // const contacts = [...this.state.contacts];
        // this.setState({contacts[0].name: name});
        console.log(this.App.state.name);
    }


    render() {
        let contacts = (
            <div>
              {this.state.contacts.map((contact, index) => {
                return <ContactCard 
                  name={contact.name}
                  surname={contact.surname}
                  phone={contact.phone}
                  key={contact.id}
                  picture={contact.picture}
                  />
              })}
            </div>
          );


    return (
        <div className="right_side">
            <button className='sort-button' onClick={() => this.sortByName()}>Sort By Name</button>
            <button className='sort-button' onClick={() => this.sortBySurname()}>Sort By Surname</button>
            <button className='sort-button add-contact' onClick={() => this.nameStateChange()}>+ Add New Contact</button>
            <div className='contacts'>
            {contacts}
            </div>
        </div>
        );
    };
}

export default rightSide;