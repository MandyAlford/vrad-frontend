import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './FavoriteCard.css';

const FavoriteCard = (props) => {

  return (
    <div className='favorite-card'>
    <h3>{props.details.name}</h3>
    <p>LISTING NO. {props.details.id}</p>
    <div className='favorite-details'>
      <h3>{props.details.beds}</h3>
      <h3>{props.details.bath}</h3>
      <h3>{props.details.costPerNight}</h3>
    </div>
    <img className='listing-image' src={`/images/${props.details.id}_a.jpg`} />
    <p>ADDRESS: {props.details.address}</p>
    <p>SUPERHOST: {props.details.superhost}</p>
    <p>FEATURES: {props.details.features}</p>
    <button className='favorite-button' onClick={props.addFavorites} id={props.details.id}>FAVORITE</button>
    </div>
  )
}

export default FavoriteCard;
