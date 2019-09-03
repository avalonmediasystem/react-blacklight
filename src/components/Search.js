import React, { Component } from 'react';
import Axios from 'axios';
import SearchResults from './SearchResults';
import Pagination from './Pagination';
import Facets from './Facets';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            documents: [],
            pages: {},
            currentPage: 1,
            facets: []
        };
    }

    handleQueryChange = event => {
        this.setState({query: event.target.value});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query != this.state.query || prevState.currentPage != this.state.currentPage) {
            this.retrieveResults();   
        }
    }

    retrieveResults() {
        let component = this;
        let url = "https://mallorn.dlib.indiana.edu/catalog.json?q=" + this.state.query + "&page=" + this.state.currentPage;
        Axios({url: url})
            .then(function(response){
                console.log(response);
                component.setState({documents: response.data.response.docs, pages: response.data.response.pages, facets: response.data.response.facets})
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
                </div>
            </form>
            <div className="row">
                <section className="col-md-9">
                    <Pagination pages={this.state.pages} search={this}></Pagination>
                    <SearchResults documents={this.state.documents}></SearchResults>
                </section>
                <section className="col-md-3">
                    <Facets facets={this.state.facets} search={this}></Facets>
                </section>
            </div>
        </div>
        );
    }
  }
  
  export default Search;
  