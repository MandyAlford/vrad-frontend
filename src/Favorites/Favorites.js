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
    debugger
    const promises = this.props.favoriteListings.map(item => {
      fetch(`http://localhost:3001/api/v1/listings/${item}`)
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
              .then(favorites => this.setState({ favorites }))
    })

  }

  render(props) {
        return (
        <div className="favorites-card">
        <p>I am a favorite</p>
        </div>
      )
    }

}

export default withRouter(Favorites);
