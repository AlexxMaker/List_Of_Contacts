import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js'
import LeftSide from './AppBody/LeftSide/LeftSide.js'
import RightSide from './AppBody/RightSide/RightSide.js'
import user_face from './user_photo.jpg'
import rightSide from './AppBody/RightSide/RightSide.js';

class App extends Component {
  state = {
    name: 'Alex',
    surname: 'Maker' ,
    occupation: 'Web Developer',
    company: 'Freelance',
    email: 'Alexeus92@mail.ru',
    phone: '+38(093)364 48 22',
    picture: user_face
  };

  render() {
    return (
      <div className="App">
        <div className='header-wrapper'>
          <div className="container">
            <AppHeader /> 
          </div>
        </div>
        <div className="container">
          <LeftSide name={this.state.name} 
                    surname={this.state.surname}
                    occupation={this.state.occupation}
                    company={this.state.company}
                    email={this.state.email}
                    phone={this.state.phone}
                    picture={this.state.picture}
          />
          <RightSide />
          <button className='sort-button add-contact' onClick={() => console.log(rightSide.state.contacts)}>+ Add New Contact</button>
        </div> 
      </div>
    );
  }
}

export default App;
