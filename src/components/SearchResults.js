import React, { Component } from 'react';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            {this.props.documents.map((doc,index) => {
                return (
                    <div>
                        <a key={index} href={"https://mallorn.dlib.indiana.edu/media_objects/" + doc['id']}>{doc["title_tesi"]}</a>
                        <dl>
                            <dt>Date:</dt>
                            <dd>{doc["date_ssi"]}</dd>
                            <dt>Main Contributors:</dt>
                            <dd>{doc["creator_ssim"]}</dd>
                            <dt>Summary:</dt>
                            <dd>{doc["summary_ssi"]}</dd>
                        </dl>
                    </div>
                );
            })}
        </div>
        );
    }
  }
  
  export default SearchResults;
  