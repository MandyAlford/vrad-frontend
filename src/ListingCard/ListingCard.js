import React, { Component } from 'react';
import {  NavLink  } from 'react-router-dom';

class ListingCard extends Component {
  constructor(props){
    super();
  }
  
  render() {
    return (
      <div className='listing-card'>
        <p>I am {this.props.name} {this.props.listingId}</p>
        <button className='listing-button' id={this.props.listingId}>SEE MORE</button>
      </div>
    )
  }
}

export default (ListingCard);
