import React, { Component } from 'react';

import SwapiService from '../services/swapi-service';

import AppMovieCards from './body/AppMovieCards';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      arrayMovie: null,
      isLoading: true,
    };

    this.searchMovies = () => {
      this.swapiService.getAllMovies().then((result) => {
        this.setState({
          arrayMovie: result,
          isLoading: false,
        });
      });
    };
  }

  componentDidMount() {
    setTimeout(() => this.searchMovies(), 0);
  }

  render() {
    const { isLoading } = this.state;

    return <div className="container">{isLoading ? null : <AppMovieCards data={this.state.arrayMovie} />}</div>;
  }
}
