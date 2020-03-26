import React, { Component } from 'react';
import { aPullAreas } from '../util/ApiCalls';
import Card from '../Card/Card';

class Areas extends Component {
  constructor() {
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
      <div>
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
