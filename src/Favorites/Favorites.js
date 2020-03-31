import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
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
          return fetch(`http://localhost:3001/api/v1/listings/${item}`)
                .then(res => res.json())
                .then(favoritesDetails => {
                  let hostStatus = favoritesDetails.details.superhost ? 'Yes' : 'No'
                  return {
                    name: favoritesDetails.name,
                    address: `${favoritesDetails.address.street}, Denver, CO ${favoritesDetails.address.zip}`,
                    superhost: hostStatus,
                    beds: favoritesDetails.details.beds,
                    baths: favoritesDetails.details.baths,
                    costPerNight: favoritesDetails.details.cost_per_night,
                    features: favoritesDetails.details.features,
                    area: favoritesDetails.area,
                    id: item
                    }
                  })

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
