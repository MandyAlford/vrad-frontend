import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './FavoriteCard.css';

const FavoriteCard = (props) => {

  return (
    <div className='favorite-card'>
      <div className='favorite-card-header'>
        <h3 className='favorite-text'>{props.details.name.toUpperCase()}</h3>
        <p className='favorite-text'>{props.details.area.toUpperCase()}</p>
        <p className='favorite-text'>LISTING NO. {props.details.id}</p>
      </div>
      <div className='favorite-details'>
        <h3 className='favorite-text'>BEDS: {props.details.beds}</h3>
        <h3 className='favorite-text'>BATHS: {props.details.baths}</h3>
        <h3 className='favorite-text'>COST: ${props.details.costPerNight}</h3>
      </div>
      <img className='favorite-image' src={`/images/${props.details.id}_a.jpg`} />
      <p className='favorite-text'>ADDRESS: {props.details.address}</p>
      <p className='favorite-text'>SUPERHOST: {props.details.superhost}</p>
      <p className='favorite-text'>FEATURES: {props.details.features.join(", ")}</p>
      <button className='add-favorite-button favorited' onClick={props.updateFavorites} id={props.details.id}>REMOVE FAVORITE</button>
    </div>
  )
}

export default FavoriteCard;
