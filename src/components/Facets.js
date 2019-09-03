import React, { Component } from 'react';

class Facets extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (facetName, item, event) => {
        event.preventDefault();
        let newQuery = this.props.search.state.query + "&f[" + facetName + "][]=" + item.value;
        console.log(newQuery);
        this.props.search.setState({query: newQuery});
    }

    render() {
        if (this.props.facets != {}) {
            return (
                <div>
                    { this.props.facets.map((facet,index) => {
                        if (facet.items.length === 0) {
                            return (<div></div>);
                        }
                        return(
                            <div className="card">
                                <h3 className="card-header collapse-toggle">
                                    <a>{facet.label}</a>
                                </h3>
                                <div className="card-body">
                                <ul className="facet-values list-unstyled">
                                    { facet.items.map((item, index) => {
                                        return(
                                            <li>
                                                <a href="" onClick={event => this.handleClick(facet.name, item, event)}><span className="facet-label">{item.label}</span></a>
                                                <span className="facet-count"> ({item.hits})</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
  }
  
  export default Facets;
  