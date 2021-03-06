import React from 'react';

import './Main.css';

import CardColumns from 'react-bootstrap/CardColumns';

import HornedBeast from './HornedBeast';
import hornedBeastConstants from './constants/hornedBeastConstants.json';


class Main extends React.Component {
  render() {
    let beasts = hornedBeastConstants.map( (animal, index) => (
        <HornedBeast 
          keyword={animal.keyword} 
          title={animal.title} 
          image_url={animal.image_url} 
          description={animal.description} 
          key={index}
        />)
    )
    return (
      <main>
        <CardColumns>
          {beasts}
        </CardColumns>
      </main>)
  }
}

export default Main;