import $ from 'jquery';
import React, { Component } from 'react';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });
  }


  render() {
    return (
      <div className="landing-page">
        <div id="wrapper" className="animate">
          <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-md-auto d-md-flex">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Top Menu Items</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-us">about us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <section id="features" className="container services">
          <div className="row">
            <div className="col-sm-3">
              <h2>Develop</h2>
              <p>Develop various categories and versions of API's using friendly developer portal.</p>
            </div>
            <div className="col-sm-3">
              <h2>Demonstrate</h2>
              <p>Demonstrate your API's to consumers over consumer portal </p>
            </div>
            <div className="col-sm-3">
              <h2>Integrate</h2>
              <p>Integrate and test API's at SIT sandbox.</p>
            </div>
            <div className="col-sm-3">
              <h2>Utilize</h2>
              <p>Promote your integration to production and enjoy 24/7 API availability.</p>
            </div>
          </div>
        </section>

        <section id="about-us" className="container features">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="navy-line" />
              <h1>Leading the marketplace in products, services, solutions</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center wow fadeInLeft">
              <p>Building on over 18 years of experience, Avanza serves 300+ clients in more than 45 countries.

                            Avanza has over 500+ product deployments processing over 12 million transactions every day on 9000 terminals, backed by a team of 300 expert resources worldwide.

                            Avanza serves clients worldwide, cutting a cross-section of industries, with the specific concentration in the financial and government sectors. Our business philosophy is founded on the importance of relationships and a persistent search for greater accomplishments.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="gray-section contact">
          <div className="container">
            <div className="row m-b-lg">
              <div className="col-lg-12 text-center">
                <div className="navy-line" />
                <h1>Contact Us</h1>
              </div>
            </div>
            <div className="row m-b-lg">
              <div className="col-lg-3"/>
              <div className="col-lg-3">
                <address>
                  <strong><span className="navy">Avanza Solutions Private Limited</span></strong><br/>
                                Suite 14B, 14th Floor<br/>
                                Fakri Trade Center<br/>
                                Karachi, Pakistan<br/>
                  <abbr title="Phone">P:</abbr> (+92) 111-AVANZA
                </address>
              </div>
              <div className="col-lg-4">
                <p className="text-color">
                                We believe that a company is as good as its people. That is why we employ the best professionals in the industry. We have over 350+ employees worldwide and continue to expand on a quarterly basis.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <a href="mailto:info@avanzasolutions.com" className="btn btn-primary">Send us mail</a>
                <p className="m-t-sm">
                                Or follow us on social platform
                </p>
                <ul className="list-inline social-icon">
                  <li><a href="#"><i className="fa fa-twitter" /></a>
                  </li>
                  <li><a href="#"><i className="fa fa-facebook" /></a>
                  </li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-8 text-center m-t-lg m-b-lg">
                <p><strong>&copy; 2019 Avanza Solutions</strong><br/> All rights reserved</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
