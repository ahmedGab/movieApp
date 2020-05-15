import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import c3 from './images/poster2.jpg'
import c2 from './images/c2.jpg'
import c1 from './images/c3.jpg'

const items = [
  {
    src:c1 ,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: c2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: c3,
    altText: 'Slide 3',
    key: '3'
  }
  
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;