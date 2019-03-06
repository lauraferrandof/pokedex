import React, { Component } from 'react';
import './App.scss';
import { fetchPokemons } from '../../services/PokemonService';
import Main from '../Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        pokemonName: ""
      }
    }

    this.filterPokemons = this.filterPokemons.bind(this);
  }

  componentDidMount() {
    fetchPokemons()
      .then(data => {
        console.log(data);
      })
  }

  filterPokemons(e) {
    const { name, value } = e.currentTarget;
    this.setState(prevState => {
      const newState = {
        filters: {
          ...prevState.filters,
          [name]: value
        }
      };
      return newState;
    })
  }

  render() {
    const { filters } = this.state;
    const { pokemonName } = filters;
    return (
      <div className="App">
        <Main pokemonName={pokemonName} filterPokemons={this.filterPokemons} />
      </div>
    );
  }
}

export default App;
