import React, { Component } from 'react';
import Axios from 'axios';
import SearchResults from './SearchResults';
import Pagination from './Pagination';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            documents: [],
            pages: {}
        };
    }

    handleQueryChange = event => {
        this.setState({query: event.target.value});
    }

    handleSearchSubmit = event => {
        // Perform ajax call and set results in state
        event.preventDefault();
        this.retrieveResults();
    }

    retrieveResults(page = 1) {
        let component = this;
        let url = "https://mallorn.dlib.indiana.edu/catalog.json?q=" + this.state.query + "&page=" + page;
        console.log(url);
        Axios({url: url})
            .then(function(response){
                console.log(response);
                component.setState({documents: response.data.response.docs, pages: response.data.response.pages})
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
            <Pagination pages={this.state.pages} search={this}></Pagination>
            <SearchResults documents={this.state.documents}></SearchResults>
        </div>
        );
    }
  }
  
  export default Search;
  