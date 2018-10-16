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
    };


    this.searchReddit = this.searchReddit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  searchReddit(search, limit) {
    let url = `https://www.reddit.com/r/${search}.json?limit=${limit}`;

    return this.fetchData(url)
      .then(posts => {
        console.log('fetching data');
        this.setState({ results: posts.data.children });
      })
      .catch(console.error);
  }

  fetchData(url) {
    return superagent.get(url)
      .then(res => {
        return res.body;
      })
      .catch(console.error);
  }

  render() {
    return (
      <main>
        <SearchForm searchMethod={this.searchReddit} />
        <SearchResultList results={this.state.results} />
      </main>
    );
  }
}

export default App;