import React, { Component } from 'react';

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
      area: ''
    }
  }

  componentDidMount() {
    let listingId = window.location.pathname.split('/')[4];
    let listingDetails;

    fetch(`http://localhost:3001/api/v1/listings/${listingId}`)
      .then(response => response.json())
      .then(data => listingDetails = data)
      .then(details => this.setState({
        name: listingDetails.name,
        address: `${listingDetails.address.street}, Denver, CO ${listingDetails.address.zip}`,
        superhost: listingDetails.details.superhost,
        beds: listingDetails.details.beds,
        baths: listingDetails.details.baths,
        costPerNight: listingDetails.details.cost_per_night,
        features: listingDetails.details.features,
        area: listingDetails.area
      }))
  }

  render () {
    return (
      <div className='individual-listing-main'>
        <h3 className='listing-name'>{this.state.name}</h3>
        <h4 className='listing-details-bold'>{this.state.area.toUpperCase()}</h4>
        <h4 className='listing-details-bold'>ADDRESS:</h4> <p>{this.state.address}</p>
        <h4 className='listing-details-bold'>SUPERHOST:</h4> <p>{this.state.superhost}</p>
        <h4 className='listing-details-bold'>BEDS:</h4> <p>{this.state.beds}</p>
        <h4 className='listing-details-bold'>BATHS:</h4> <p>{this.state.baths}</p>
        <h4 className='listing-details-bold'>NIGHTLY COST:</h4> <p>{this.state.costPerNight}</p>
        <h4 className='listing-details-bold'>FEATURES:</h4> <p>{this.state.features.join(", ")}</p>
      </div>
    )
  }
}

        // <h3 className="listing-address">{this.state.listingDetails.address.street} {this.state.listingDetails.address.zip}</h3>

export default IndividualListing;
