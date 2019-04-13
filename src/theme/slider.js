import React from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import RBCarousel from 'react-bootstrap-carousel';
import Col from './column';
import Row from './row';
import header1 from '../assets/img/landing/header_one.jpg';
import header2 from '../assets/img/landing/header_two.jpg';

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
          <Col span={12} style={{ paddingTop: '60px' }}>
            <RBCarousel
              animation
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={(r) => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header1}
                />
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={header2}
                />
              </div>
              <div style={{ ...styles, backgroundColor: 'lightblue' }}>
                <div className="carousel-center">
                  <iframe
                    style={{ width: 500 }}
                    height="250"
                    src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      );
    }
}

