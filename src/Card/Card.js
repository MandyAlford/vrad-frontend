import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';
import caphill from '../assets/caphill.jpg';
import rino from '../assets/rino.jpg';
import parkhill from '../assets/parkhill.jpg';
import lohi from '../assets/lohi.jpg';


const Card = (props) => {
  let images = [rino, caphill, lohi, parkhill];
  let areaImage = images.find(image => image.includes(props.shortName.toLowerCase().split(" ").join("")));

  return (
    <div className='area-card'>
      <h2>{props.shortName}</h2>
      <h3>{props.longName}</h3>
      <img src= {areaImage} />
      <p>{props.description}</p>
      <button type='area-button' onClick={props.routeToListings} id={props.id}>SEE LISTINGS</button>
    </div>
  )
}

export default Card;
