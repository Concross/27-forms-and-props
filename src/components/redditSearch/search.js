'use strict';

import React from 'react';


import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'all',
      limit: 5,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state.search, this.state.limit);
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleLimit(e) {
    this.setState({ limit: e.target.value });
  }

  render() {
    return (
      <div className="redditSearch">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} value={this.state.search} placeholder="Search..." />
          <input onChange={this.handleLimit} value={this.state.limit} type="number" min="0" max="100" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;