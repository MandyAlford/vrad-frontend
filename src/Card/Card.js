import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div className='area-card'>
      <h2>{props.shortName}</h2>
      <h3>{props.longName}</h3>
      <p>{props.description}</p>
      <button type='area-button'>SEE LISTINGS</button>
    </div>
  )
}

export default Card;
