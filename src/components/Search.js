import React, { Component } from 'react';
import Axios from 'axios';
import SearchResults from './SearchResults';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            documents: []
        };
    }

    handleQueryChange = event => {
        this.setState({query: event.target.value});
    }

    handleSearchSubmit = event => {
        // Perform ajax call and set results in state
        event.preventDefault();
        let component = this;
        Axios({url: "https://mallorn.dlib.indiana.edu/catalog.json?q=" + this.state.query})
            .then(function(response){
                console.log(response);
                component.setState({documents: response.data.response.docs})
            });
    }

    render() {
        const { query } = this.state;
        return (
        <div>
            <form className="container">
                <label htmlFor="q" className="sr-only">search for</label>
                <div className="input-group">
                    <input value={query} onChange={this.handleQueryChange} name="q" className="form-control" placeholder="Search..." autoFocus="autofocus"></input>
                    <span className="input-group-append">
                        <button onClick={this.handleSearchSubmit} type="submit" className="btn btn-primary search-btn" id="search">
                            <span className="submit-search-text">Search</span>
                        </button>
                    </span>
                </div>
            </form>
            <SearchResults documents={this.state.documents}></SearchResults>
        </div>
        );
    }
  }
  
  export default Search;
  