import $ from 'jquery';
import React, { Component } from 'react';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import Slider from '../../theme/slider';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import a1 from '../../assets/img/a1.jpg';
import a2 from '../../assets/img/a2.jpg';
import a3 from '../../assets/img/a3.jpg';
import a4 from '../../assets/img/a4.jpg';
import a5 from '../../assets/img/a5.jpg';
import a6 from '../../assets/img/a6.jpg';

export default class Landing extends Component {
  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });
  }


  render() {
    return (
      <div className="landing-page gray-bg">
        <div id="wrapper" className="animate">
          <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-dark gray-bg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <Link className="nav-link" to="">
              <img alt="show" className="img-circle logo" src={logo}/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-md-auto d-md-flex">
                <li className="nav-item">
                  <Link className="nav-link menu-tabs" to="/" id="home">
                          Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link menu-tabs" to="/register" id="register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link menu-tabs" to="/login" id="login">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Slider/>
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
        <section id="stories" className="container stories">
          <div className="row m-b-lg">
            <div className="col-lg-12 text-center">
              <div className="navy-line" />
              <h1>Success Stories</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row contact-box">
                <div className="col-sm-4">
                  <div className="text-center">
                    <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a1}/>
                    <div className="m-t-xs font-bold">Graphics designer</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3><strong>Abdul Noor </strong></h3>
                  <p><i className="fa fa-map-marker" /> Sindh State 32/106</p>
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                                  795 Folsom Ave, Suite 600<br/>
                                  San Francisco, CA 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row contact-box">
                <div className="col-sm-4">
                  <div className="text-center">
                    <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a2}/>
                    <div className="m-t-xs font-bold">CEO</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3><strong>Raghib Ahmed</strong></h3>
                  <p><i className="fa fa-map-marker" /> Sindh State 32/106</p>
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                                  795 Folsom Ave, Suite 600<br/>
                                  San Francisco, CA 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row contact-box">
                <div className="col-sm-4">
                  <div className="text-center">
                    <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a3}/>
                    <div className="m-t-xs font-bold">Marketing manager</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3><strong>Abdus Samad</strong></h3>
                  <p><i className="fa fa-map-marker" /> Sindh State 32/106</p>
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                                  795 Folsom Ave, Suite 600<br/>
                                  San Francisco, CA 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row contact-box">
                <div className="col-sm-4">
                  <div className="text-center">
                    <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a4}/>
                    <div className="m-t-xs font-bold">Sales manager</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3><strong>Tamam</strong></h3>
                  <p><i className="fa fa-map-marker" /> Sindh State 32/106</p>
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                                  795 Folsom Ave, Suite 600<br/>
                    Sindh, PK 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row contact-box">
                <div className="col-sm-4">
                  <div className="text-center">
                    <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a5} />
                    <div className="m-t-xs font-bold">Graphics designer</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3><strong>Salik</strong></h3>
                  <p><i className="fa fa-map-marker" /> Sindh State 32/106</p>
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                          795 Folsom Ave, Suite 600<br/>
                    Sindh, PK 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row contact-box">
                <div className="col-sm-4">
                  <div className="text-center">
                    <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a6}/>
                    <div className="m-t-xs font-bold">Sales manager</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3><strong>Muheet</strong></h3>
                  <p><i className="fa fa-map-marker" /> Sindh State 32/106</p>
                  <address>
                    <strong>Twitter, Inc.</strong><br/>
                              795 Folsom Ave, Suite 600<br/>
                              Sindh, PK 94107<br/>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
                <div className="clearfix" />
              </div>
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
              <p>Building on over 18 years of experience, Claytones Private Limited serves 300+ clients in more than 45 countries.

                  Claytones Private Limited has over 500+ product deployments processing over 12 million transactions every day on 9000 terminals, backed by a team of 300 expert resources worldwide.

                  Claytones Private Limited serves clients worldwide, cutting a cross-section of industries, with the specific concentration in the financial and government sectors. Our business philosophy is founded on the importance of relationships and a persistent search for greater accomplishments.
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
                  <strong><span className="navy">Claytones Private Limited</span></strong><br/>
                                HBL Block<br/>
                                City Campus, IBA Karachi<br/>
                                Karachi, Pakistan<br/>
                  <abbr title="Phone">P:</abbr> (+92) 111-CLAYTONES
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
                <a href="mailto:mir.nawaz@iba.edu.pk" className="btn btn-primary">Send us mail</a>
                <p className="m-t-sm">
                                Or follow us on social platform
                </p>
                <ul className="list-inline social-icon">
                  <li><a href="/app/home"><i className="fa fa-twitter" /></a>
                  </li>
                  <li><a href="/app/home"><i className="fa fa-facebook" /></a>
                  </li>
                  <li><a href="/app/home"><i className="fa fa-linkedin" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-8 text-center m-t-lg m-b-lg">
                <p><strong>&copy; 2019 Claytones Private Limited</strong><br/> All rights reserved</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
