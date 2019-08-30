import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'

// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faPen, faSave, faTrash);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Blacklight Search</h1>
        <Search></Search>
      </div>
    );
  }
}

export default App;
