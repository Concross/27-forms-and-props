'use strict';

import React from 'react';
import SearchForm from './redditSearch/search';
import SearchResultList from './redditSearch/resultList';
import superagent from 'superagent';

import '../style/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: false,
    };

    this.searchReddit = this.searchReddit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  searchReddit(search, limit) {
    let url = `https://www.reddit.com/r/${search}.json?limit=${limit}`;

    return this.fetchData(url)
      .then(posts => {
        console.log('fetching data');
        this.setState({
          results: posts.data.children,
          error: false,
        });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  fetchData(url) {
    return superagent.get(url)
      .then(res => {
        this.setState({ error: false });
        return res.body;
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <main>
        <SearchForm searchMethod={this.searchReddit} className={this.state.error ? 'searchError' : null} />
        <SearchResultList results={this.state.results} />
      </main>
    );
  }
}

export default App;