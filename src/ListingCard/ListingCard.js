import React, { Component } from 'react';
import {  NavLink  } from 'react-router-dom';
import './ListingCard.css';


const ListingCard = (props) => {
  return (
    <div className='listing-card'>
      <h2>{props.name}</h2>
      <img src={`/images/${props.listingId}_a.jpg`} className='listing-image'/>
      <button type='listing-button'>SEE MORE</button>
    </div>

  )
}

export default (ListingCard);
