import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (page, event) => {
        event.preventDefault();
        this.props.search.setState({ currentPage: page });
    }

    render() {
        if (this.props.pages.total_count) {
            return (
                <div className="sort-pagination">
                    {this.props.pages.prev_page != null ? 
                        (<a href="#" onClick={event => this.handleClick(this.props.pages.prev_page, event)}>Previous</a>)
                    :
                        (<span>Previous</span>)
                    }
                    <span> | {this.props.pages.offset_value + 1}-{this.props.pages.offset_value + this.props.pages.limit_value} of {this.props.pages.total_count} | </span>
                    {this.props.pages.next_page != null ? 
                        (<a href="#" onClick={event => this.handleClick(this.props.pages.next_page, event)}>Next</a>)
                    :
                        (<span>Next</span>)
                    }
                </div>
            );
        } else if (this.props.pages.total_count === 0) {
            return <p>No results matched your search.</p>
        } else {
            return(
                <div></div>
            );
        }
    }
  }
  
  export default Pagination;
  