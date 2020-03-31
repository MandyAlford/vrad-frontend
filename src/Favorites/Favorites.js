import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { fetchListing } from '../util/ApiCalls';
import './Favorites.css';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  getFavorites = () => {
    const promises = this.props.favoriteListings.map(item => {
      return fetchListing(item)
    })
     Promise.all(promises)
      .then(favorites => this.setState({ favorites }))
  }

  componentDidMount() {
    this.getFavorites();
  }

  componentDidUpdate(prevProps, prevState) {
    const updatedFavorites = this.state.favorites.filter((favorite) => {
      return this.props.favoriteListings.includes(favorite.id)
    })
    if (updatedFavorites.length != this.state.favorites.length) {
      this.setState({favorites: updatedFavorites})
    }
  }

  render() {
    let favoritesDisplay;
    if(!this.state.favorites.length) {
      favoritesDisplay = (
        <div className='fav-card-container'>
          <h1 className='error-message'> You have no favorites! </h1>
        </div>)
    } else {
      favoritesDisplay = (
        <div className='card-container'>

        {this.state.favorites.map(item => {
        return <FavoriteCard
          details={item}
          updateFavorites={this.props.updateFavorites}
          />
        })}
        </div>
      )
    }
    return favoritesDisplay;
  }
}

export default withRouter(Favorites);
