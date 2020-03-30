import React, { Component } from 'react';
import {  NavLink  } from 'react-router-dom';
import './ListingCard.css';


const ListingCard = (props) => {
      let navUrl = `${props.listingId}`
  return (
    <div className='listing-card'>
      <h2 className='listing-card-header'>{props.name}</h2>
      <img src={`/images/${props.listingId}_b.jpg`} className='main-image'/>
      <NavLink to={navUrl} >
        <button className='listing-button' id={props.listingId}>SEE MORE</button>
      </NavLink>
    </div>

)}

export default ListingCard;
