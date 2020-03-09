import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Col from './column';
import Row from './row';

import header1 from '../assets/img/landing/1.jpg';
import header3 from '../assets/img/landing/2.jpg';
import header4 from '../assets/img/landing/3.jpg';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col span={12} style={{ paddingTop: '57px' }}>
          <Carousel
            showArrows={false} dynamicHeight
            autoPlay interval={3000}
            infiniteLoop useKeyboardArrows
            showThumbs={false} showIndicators>
            <div>
              <img src={header1} alt="Slider No. 1"/>
            </div>
            <div>
              <img src={header4} alt="Slider No. 2"/>
            </div>
            <div>
              <img src={header3} alt="Slider No. 3"/>
            </div>
          </Carousel>
        </Col>
      </Row>
    );
  }
}

