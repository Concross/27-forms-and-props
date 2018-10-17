'use strict';

import React from 'react';

import './search.scss';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="redditResultList">
        <h1>Results</h1>
        <ul>
          {this.props.results.map((post, i) => {
            return (
              <li key={i}>{post.data.title}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ResultList;