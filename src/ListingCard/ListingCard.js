import React, { Component } from 'react';
import {  NavLink  } from 'react-router-dom';

const ListingCard = (props) => {
  return (
    <div className='listing-card'>
      <p>I am {props.name} {props.listingId}</p>
      <button type='listing-button'>SEE MORE</button>
    </div>

  )
}

export default (ListingCard);
