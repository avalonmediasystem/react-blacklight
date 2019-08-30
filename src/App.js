import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent'

// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faPen, faSave, faTrash);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Blacklight Search</h1>
        <SearchComponent></SearchComponent>
      </div>
    );
  }
}

export default App;
