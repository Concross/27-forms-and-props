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
              <li key={i}>
                <a href={'www.' + post.data.domain + post.data.permalink}>
                  <h1>{post.data.title}</h1>
                  <p>{post.data.ups}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ResultList;