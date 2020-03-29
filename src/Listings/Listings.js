import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import ListingCard from '../ListingCard/ListingCard';
import './Listings.css';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    }
  }

  componentDidMount(props) {
    fetch(`http://localhost:3001/api/v1/areas/${this.props.match.params.area_id}`)
    .then(response => response.json())
    .then(data => {
      const promises = data.listings.map(listing => {
        return fetch(`http://localhost:3001${listing}`)
          .then(res => res.json())
          .then(listingDetails => {
            return {
              name: listingDetails.name,
              listingId: listingDetails.listing_id
            }
          })
      })
      return Promise.all(promises)
    })
    .then(listings => {
      this.setState({ listings })
    })
  }

  render() {
    let listingInfo = this.state.listings.map(item => {
              return <ListingCard
                name={ item.name }
                listingId={ item.listingId }
              />
            })

    return (
      <div className='listings-container'>
        { listingInfo }
      </div>
    )
  }
}

export default withRouter(Listings);
