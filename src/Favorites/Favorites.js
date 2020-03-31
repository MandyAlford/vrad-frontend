import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

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
              return {
                name: favoritesDetails.name,
                address: `${favoritesDetails.address.street}, Denver, CO ${favoritesDetails.address.zip}`,
                superhost: favoritesDetails.details.superhost,
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
    return this.state.favorites.map(item => {

    })
    }

}

export default withRouter(Favorites);
