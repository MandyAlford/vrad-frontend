import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div>
      <h2>{props.shortName}</h2>
      <h1>{props.longName}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card;
