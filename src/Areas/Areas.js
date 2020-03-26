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

  async componentDidMount() {
    let areaInfo = await aPullAreas();
    this.setState({areas: areaInfo});
    console.log(this.state)
  }

  render() {
    const { areas } = this.state;

    return (
      <div>
      {areas.map(item => {
        return <Card area = {item.area}/>
      })}

      </div>
    )
  }
}

export default Areas;
