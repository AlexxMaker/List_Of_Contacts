import React, {Component} from 'react';
import './RightSide.css'
import ContactCard from '../../ContactCard/ContactCard.js'

class rightSide extends Component {
    state = {
        contacts: [
            {id: '1', name: 'Aziz', surname: 'Mrazish', phone: '+38(099)937 99 92'},
            {id: '2', name: 'Filipp', surname: 'Kirkorov', phone: '+38(097)937 14 88'},
            {id: '3', name: 'Arkadiy', surname: 'Ukupnik', phone: '+38(063)923 91 11'},
            {id: '4', name: 'Gandalf', surname: 'Seriy', phone: '+38(066)437 59 43'},
            {id: '5', name: 'Sasha', surname: 'Beliy', phone: '+38(073)927 19 93'}
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
            {contacts}
            <button onClick={() => this.sortByName()}>Click ME!</button>
        </div>
        );
    };
}

export default rightSide;