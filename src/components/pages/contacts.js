import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../theme/content';
import a1 from '../../assets/img/a1.jpg';
import a2 from '../../assets/img/a2.jpg';
import a3 from '../../assets/img/a3.jpg';
import a4 from '../../assets/img/a4.jpg';
import a5 from '../../assets/img/a5.jpg';
import a6 from '../../assets/img/a6.jpg';
import a7 from '../../assets/img/a7.jpg';

class Contacts extends Component {
  render() {
    return (
      <Content>
        <div className="row">
          <div className="col-lg-4 contact-items">
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
          <div className="col-lg-4 contact-items">
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
          <div className="col-lg-4 contact-items">
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
          <div className="col-lg-4 contact-items">
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
          <div className="col-lg-4 contact-items">
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
          <div className="col-lg-4 contact-items">
            <div className="row contact-box">
              <div className="col-sm-4">
                <div className="text-center">
                  <img alt="show test" className="img-circle-lg m-t-xs img-responsive" src={a7} />
                  <div className="m-t-xs font-bold">Developer</div>
                </div>
              </div>
              <div className="col-sm-8">
                <h3><strong>Shoab Malik</strong></h3>
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
          <div className="col-lg-4 contact-items">
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
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
