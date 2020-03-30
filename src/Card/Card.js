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
      <h2 className='area-text'>{props.shortName}</h2>
      <h3 className='area-text'>{props.longName}</h3>
      <img className='area-image' src={areaImage} alt={`image of ${props.shortName} neighborhood`}/>
      <p className='area-text'>{props.description}</p>
      <button className='area-button' onClick={props.routeToListings} id={props.id}>SEE LISTINGS</button>
    </div>
  )
}

export default Card;
