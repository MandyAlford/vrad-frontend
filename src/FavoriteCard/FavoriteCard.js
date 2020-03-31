import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './FavoriteCard.css';

const FavoriteCard = (props) => {

  return (
    <div className='favorite-card'>
    <h3>{props.details.name}</h3>
    <p>{props.details.area.toUpperCase()}</p>
    <p>LISTING NO. {props.details.id}</p>
    <div className='favorite-details'>
      <h3>BEDS:{props.details.beds}</h3>
      <h3>BATHS:{props.details.baths}</h3>
      <h3>COST: ${props.details.costPerNight}</h3>
    </div>
    <img className='listing-image' src={`/images/${props.details.id}_a.jpg`} />
    <p>ADDRESS: {props.details.address}</p>
    <p>SUPERHOST: {props.details.superhost}</p>
    <p>FEATURES: {props.details.features.join(", ")}</p>
    <button className='favorite-button' onClick={props.updateFavorites} id={props.details.id}>FAVORITE</button>
    </div>
  )
}

export default FavoriteCard;
