import React, { Component } from 'react';

class IndividualListing extends Component {
  constructor(props){
    super();
    this.state = {
      listingDetails: {}
    }
  }

  componentDidMount() {
    let listingId = window.location.pathname.split('/')[4];
    let listingDetails;

    fetch(`http://localhost:3001/api/v1/listings/${listingId}`)
      .then(response => response.json())
      .then(data => listingDetails = data)
      .then(details => this.setState({listingDetails}))
  }

  render () {
    return (
      <div className='individual-listing-main'>
        <h1>{this.state.listingDetails.name}</h1>
      </div>
    )
  }
}

export default IndividualListing;
