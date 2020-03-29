import React, { Component } from 'react';
import {  NavLink, Route  } from 'react-router-dom';


class ListingCard extends Component {
  constructor(props){
    super();
  }

  render() {
    let navUrl = `${this.props.listingId}`
    return (
      <div className='listing-card'>
        <p>I am {this.props.name} {this.props.listingId}</p>
        <NavLink to={navUrl} >
          <button className='listing-button' id={this.props.listingId}>SEE MORE</button>
        </NavLink>
      </div>
    )
  }
}

export default ListingCard;
