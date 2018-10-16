import React from 'react';


import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div className="redditSearch">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} placeholder="Search..." />
        </form>
      </div>
    );
  }
}