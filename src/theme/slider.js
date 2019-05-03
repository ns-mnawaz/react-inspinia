import React from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import RBCarousel from 'react-bootstrap-carousel';
import Col from './column';
import Row from './row';
import header1 from '../assets/img/landing/landing_1.jpg';
import header3 from '../assets/img/landing/landing_2.jpg';
import header4 from '../assets/img/landing/landing_3.jpg';

const styles = { height: 400, width: '100%' };

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
    onSelect = (active, direction) => {
      // eslint-disable-next-line no-console
      console.log(`active=${active} && direction=${direction}`);
    };

    slideNext = () => {
      this.slider.slideNext();
    };
    slidePrev = () => {
      this.slider.slidePrev();
    };
    goToSlide = () => {
      this.slider.goToSlide(4);
    };
    render() {
      const { leftIcon, rightIcon } = this.state;
      return (
        <Row>
          <Col span={12} style={{ paddingTop: '57px' }}>
            <RBCarousel
              animation
              autoplay={this.state.autoplay}
              slideshowSpeed={4000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={(r) => (this.slider = r)}
              version={4}
            >
              <div style={styles}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header1}
                />
              </div>
              <div style={styles}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header4}
                />
              </div>
              <div style={styles}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header3}
                />
              </div>
              <div style={styles}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header4}
                />
              </div>
              <div style={styles}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header1}
                />
              </div>
              <div style={styles}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header3}
                />
              </div>
            </RBCarousel>
          </Col>
        </Row>
      );
    }
}

