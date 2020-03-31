import React, { Component } from 'react';
import Card from '../Card/Card';
import blackmap from '../assets/black-map.png';
import './Areas.css';
import Header from '../Header/Header';

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
                  id: areaDetails.id,
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

        {areas.map(item => {
          return <Card
            key={ item.id }
            id={ item.id }
            shortName={ item.shortName }
            longName={ item.longName }
            description={ item.description }
            routeToListings={ this.props.routeToListings }
          />
        })}

      </div>
    )
  }
}

export default Areas;
