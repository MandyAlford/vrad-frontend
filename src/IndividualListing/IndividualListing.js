import React, { Component } from 'react';
import './IndividualListing.css';

class IndividualListing extends Component {
  constructor(props){
    super();
    this.state = {
      name: '',
      address: '',
      superhost: '',
      beds: 0,
      baths: 0,
      costPerNight: 0,
      features: [],
      area: '',
      id: 0
    }
  }

  componentDidMount() {
    let listingId = window.location.pathname.split('/')[4];
    let listingDetails;

    fetch(`http://localhost:3001/api/v1/listings/${listingId}`)
      .then(response => response.json())
      .then(data => listingDetails = data)
      .then(details => {
        let hostStatus = listingDetails.details.superhost ? 'Yes' : 'No'
        this.setState({
          name: listingDetails.name,
          address: `${listingDetails.address.street}, Denver, CO ${listingDetails.address.zip}`,
          superhost: hostStatus,
          beds: listingDetails.details.beds,
          baths: listingDetails.details.baths,
          costPerNight: listingDetails.details.cost_per_night,
          features: listingDetails.details.features,
          area: listingDetails.area,
          id: listingId
        })
      })
      .then(information => this.checkIfFavorite(listingId))
  }

  checkIfFavorite = (listingId) => {
    if(this.props.favorites.includes(listingId)) {
      document.getElementById(listingId).classList.add('favorited')
      this.props.toggleFavoriteMessage(listingId)
    }
  }

  render (props) {
    return (
      <div className='individual-listing-main'>
        <div className='individual-listing-container'>
          <div className='listing-header-container'>
            <h3 className='listing-name'>{this.state.name.toUpperCase()}</h3>
            <h4 className='listing-details-bold'>{this.state.area.toUpperCase()}</h4>
          </div>
          <div className='images-container'>
            <img className='listing-image' src={`/images/${this.state.id}_a.jpg`} />
            <img className='listing-image' src={`/images/${this.state.id}_b.jpg`} />
            <img className='listing-image' src={`/images/${this.state.id}_c.jpg`} />
          </div>
          <div className='details-container'>
            <h4 className='listing-details-bold'>ADDRESS: </h4>
            <p className='listing-details'>{this.state.address}</p>
          </div>
          <div className='details-container'>
            <h4 className='listing-details-bold'>SUPERHOST: </h4>
            <p className='listing-details'>{this.state.superhost.toString()}</p>
          </div>
          <div className='details-container'>
            <h4 className='listing-details-bold'>BEDS: </h4>
            <p className='listing-details'>{this.state.beds}</p>
          </div>
          <div className='details-container'>
            <h4 className='listing-details-bold'>BATHS: </h4>
            <p className='listing-details'>{this.state.baths}</p>
          </div>
          <div className='details-container'>
            <h4 className='listing-details-bold'>NIGHTLY COST: </h4>
            <p className='listing-details'>${this.state.costPerNight}</p>
          </div>
          <div className='details-container'>
            <h4 className='listing-details-bold'>FEATURES: </h4>
            <p className='listing-details'>{this.state.features.join(", ")}</p>
          </div>
          <button className='favorite-button' onClick={this.props.updateFavorites} id={this.state.id}>FAVORITE</button>
          <p className='favorites-message hidden'> Added to your favorites! </p>
        </div>
      </div>
    )
  }
}

export default IndividualListing;
