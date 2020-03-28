import React, { Component } from 'react';
import Card from '../Card/Card';
import blackmap from '../assets/black-map.png';

class Areas extends Component {
  constructor(props) {
    super();
    this.state = {
      areas: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => {
          const promises = data.areas.map(area => {
            return fetch(`http://localhost:3001${area.details}`)
              .then(res => res.json())
              .then(areaDetails => {
                return {
                  shortName: area.area,
                  longName: areaDetails.name,
                  description: areaDetails.about
                }
              })
          })
          return Promise.all(promises)
      })
    .then(areas => this.setState({ areas }))
  }

  render() {
    const { areas } = this.state;
    let name = this.props.name;
    let type = this.props.type;

    return (
      <div className='card-container'>
      <header className='areas-header'>
        <div className='logo-container'>
            <img src= {blackmap} />
            <h1 className="vrad">VRAD</h1>
        </div>
        <div className='header-text-container'>
          <h2 className='header-description'>WELCOME, {name.toUpperCase()}!</h2>
          <p className='travel-type'>TRAVEL TYPE: {type.toUpperCase()}</p>
        </div>
        <div className='button-container'>
          <button className='header-buttons' id='favorite-button'>FAVORITES</button>
          <button className='header-buttons' id='log-off-button'>LOG OFF</button>
        </div>
      </header>
      {areas.map(item => {
        return <Card
          shortName={ item.shortName }
          longName={ item.longName }
          description={ item.description }
        />
      })}

      </div>
    )
  }
}

export default Areas;
