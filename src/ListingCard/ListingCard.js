import React, { Component } from 'react';
import {  NavLink  } from 'react-router-dom';
import './ListingCard.css';


const ListingCard = (props) => {
      let navUrl = `${props.listingId}`
  return (

    <div className='listing-card-image'>
      <h2>{props.name}</h2>
      <img src={`/images/${props.listingId}_a.jpg`} className='listing-image'/>
      <NavLink to={navUrl} >
        <button className='listing-button' id={props.listingId}>SEE MORE</button>
      </NavLink>
    </div>

)}

export default ListingCard;
