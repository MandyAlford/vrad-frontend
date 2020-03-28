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

    return (
      <div className='card-container'>
      <header className='areas-header'>
        <div className='logo-container'>
            <img src= {blackmap} />
            <h1>VRAD</h1>
        </div>
          <h2 className='header-description'>WELCOME, USER!</h2>
        <div className='button-container'>
          <button id='favorite-button'>FAVORITES</button>
          <button id='log-off-button'>LOGOFF</button>
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
