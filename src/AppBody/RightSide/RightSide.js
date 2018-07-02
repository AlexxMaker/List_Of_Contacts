import React, {Component} from 'react';
import './RightSide.css'
import ContactCard from '../../ContactCard/ContactCard.js'

class rightSide extends Component {
    state = {
        contacts: [
            {id: '1', name: 'Aleksey', surname: 'PMrazish', phone: '+38(099)937 99 92'},
            {id: '2', name: 'Aleksander', surname: 'IKirkorov', phone: '+38(097)937 14 88'},
            {id: '3', name: 'Alexis', surname: 'ZUkupnik', phone: '+38(063)923 91 11'},
            {id: '4', name: 'Alesandro', surname: 'MSeriy', phone: '+38(066)437 59 43'},
            {id: '5', name: 'Aleale', surname: 'RBeliy', phone: '+38(073)927 19 93'}
        ]
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
                  click={() => this.deleteContactHandler(index)}
                  />
              })}
            </div>
          );


    return (
        <div className="right_side">
            <button className='sort-button' onClick={() => this.sortByName()}>Sort By Name</button>
            <button className='sort-button' onClick={() => this.sortBySurname()}>Sort By Surname</button>
            <button className='sort-button add-contact'>+ Add New Contact</button>
            {contacts}
        </div>
        );
    };
}

export default rightSide;