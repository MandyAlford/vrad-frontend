import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {

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

  render() {
    let favoritesDisplay;
    if(!this.state.favorites.length) {
      favoritesDisplay = (<h1 className='error-message'> You have no Favorites </h1>)
    } else {
      favoritesDisplay = (
        <div className='card-container'>

        {this.state.favorites.map(item => {
        return <FavoriteCard
          details={item}
          addFavorites={this.props.updateFavorites}
          />
        })}
        </div>
      )
    }
    return favoritesDisplay;
  }
}

export default withRouter(Favorites);
