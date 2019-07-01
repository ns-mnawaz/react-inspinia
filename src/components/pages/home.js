/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../theme/content';
import { toastr } from 'react-redux-toastr';
import { Line, Polar, Doughnut } from 'react-chartjs-2';
import charts from '../../constants/charts';
import a1 from '../../assets/img/a1.jpg';
import a2 from '../../assets/img/a2.jpg';
import a3 from '../../assets/img/a3.jpg';
import a4 from '../../assets/img/a4.jpg';
import a5 from '../../assets/img/a5.jpg';
import a6 from '../../assets/img/a6.jpg';

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

class Home extends Component {
  componentDidMount() {
    toastr.success('Get Hired!', 'Welcome to Get Hired!');
  }

  render() {
    return (
      <Content>
        <div className="row  border-bottom white-bg dashboard-header">
          <div className="col-sm-3">
            <h2>Welcome Get Hired !!!</h2>
            <small>You have 16 messages and 8 notifications.</small>
            <ul className="list-group clear-list m-t">
              <li className="list-group-item fist-item">
                <span className="pull-right">
                                    09:00 pm
                </span>
                <span className="label label-success">1</span> Please contact me
              </li>
              <li className="list-group-item">
                <span className="pull-right">
                                    10:16 am
                </span>
                <span className="label label-info">2</span> Sign a contract
              </li>
              <li className="list-group-item">
                <span className="pull-right">
                                    08:22 pm
                </span>
                <span className="label label-primary">3</span> Open new shop
              </li>
              <li className="list-group-item">
                <span className="pull-right">
                                    11:06 pm
                </span>
                <span className="label label-default">4</span> Call back to Sylvia
              </li>
              <li className="list-group-item">
                <span className="pull-right">
                                    12:00 am
                </span>
                <span className="label label-primary">5</span> Write a letter to Sandra
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <div>
              <div >
                <Line data={charts.lines} />
              </div>
            </div>

          </div>
          <div className="col-sm-3">
            <div className="statistic-box">
              <h4>
                            Project Beta progress
              </h4>
              <p>
                            You have two project with not completed task.
              </p>
              <div className="row text-center">
                <div className="col-lg-6">
                  <Polar data={charts.polar} options={{ legend: { display: false } }}/>
                  <h5 >Kolter</h5>
                </div>
                <div className="col-lg-6">
                  <Doughnut data={charts.doughnut} options={{ legend: { display: false } }}/>
                  <h5 >Maxtor</h5>
                </div>
              </div>
              <div className="m-t">
                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper wrapper-content grag-bg">
          <div className="row">
            <div className="col-lg-4">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>New data for the report</h5> <span className="label label-primary">M+</span>
                  <div className="ibox-tools">
                    <a className="collapse-link">
                      <i className="fa fa-chevron-up" />
                    </a>
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-wrench" />
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                      <li><a href="#">Config option 1</a>
                      </li>
                      <li><a href="#">Config option 2</a>
                      </li>
                    </ul>
                    <a className="close-link">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="ibox-content">
                  <div>

                    <div className="pull-right text-right">
                      <br/>
                      <small className="font-bold">$ 20 054.43</small>
                    </div>
                    <h4>NYS report new data!
                      <br/>
                      <small className="m-r"><a href="graph_flot.html"> Check the stock price! </a></small>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Read below comments</h5>
                  <div className="ibox-tools">
                    <a className="collapse-link">
                      <i className="fa fa-chevron-up" />
                    </a>
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-wrench" />
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                      <li><a href="#">Config option 1</a>
                      </li>
                      <li><a href="#">Config option 2</a>
                      </li>
                    </ul>
                    <a className="close-link">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="ibox-content no-padding">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p><a className="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry.</p>
                      <small className="block text-muted"><i className="fa fa-clock-o" /> 1 minuts ago</small>
                    </li>
                    <li className="list-group-item">
                      <p><a className="text-info" href="#">@Stock Man</a> Check this stock chart. This price is
                                crazy! </p>
                      <div className="text-center m">
                        <span id="sparkline8" />
                      </div>
                      <small className="block text-muted"><i className="fa fa-clock-o" /> 2 hours ago</small>
                    </li>
                    <li className="list-group-item">
                      <p><a className="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a
                                galley </p>
                      <small className="block text-muted"><i className="fa fa-clock-o" /> 2 minuts ago</small>
                    </li>
                    <li className="list-group-item ">
                      <p><a className="text-info" href="#">@Jonathan Febrick</a> The standard chunk of Lorem
                                Ipsum</p>
                      <small className="block text-muted"><i className="fa fa-clock-o" /> 1 hour ago</small>
                    </li>
                    <li className="list-group-item">
                      <p><a className="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry.</p>
                      <small className="block text-muted"><i className="fa fa-clock-o" /> 1 minuts ago</small>
                    </li>
                    <li className="list-group-item">
                      <p><a className="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a
                                galley </p>
                      <small className="block text-muted"><i className="fa fa-clock-o" /> 2 minuts ago</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Your daily feed</h5>
                  <div className="ibox-tools">
                    <span className="label label-warning-light pull-right">16 Messages</span>
                  </div>
                </div>
                <div className="ibox-content">

                  <div>
                    <div className="feed-activity-list">

                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a1}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">5m ago</small>
                          <strong>Raghib</strong> posted a new blog. <br/>
                          <small className="text-muted">Today 5:60 pm - 12.06.2014</small>

                        </div>
                      </div>

                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a2}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">2h ago</small>
                          <strong>Abdul Raheem</strong> posted message on <strong>Monica
                                  Smith</strong> site. <br/>
                          <small className="text-muted">Today 2:10 pm - 12.06.2014</small>
                        </div>
                      </div>
                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a3}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">2h ago</small>
                          <strong>Salik</strong> add 1 photo on <strong>Raheem</strong>. <br/>
                          <small className="text-muted">2 days ago at 8:30am</small>
                        </div>
                      </div>
                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a4}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right text-navy">5h ago</small>
                          <strong>Suwayd</strong> started following <strong>Raghib
                                  Khan</strong>. <br/>
                          <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                          <div className="actions">
                            <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up" /> Like </a>
                            <a className="btn btn-xs btn-white"><i className="fa fa-heart" /> Love</a>
                          </div>
                        </div>
                      </div>
                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a5}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">2h ago</small>
                          <strong>Abdus Samad</strong> posted message on <strong>Kazim</strong> site. <br/>
                          <small className="text-muted">Yesterday 5:20 pm - 12.06.2014</small>
                          <div className="well">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    Over the years, sometimes by accident, sometimes on purpose (injected humour and the
                                    like).
                          </div>
                          <div className="pull-right">
                            <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up" /> Like </a>
                          </div>
                        </div>
                      </div>
                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a6}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">23h ago</small>
                          <strong>Marwan</strong> love <strong>Abdul Samad</strong>. <br/>
                          <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                        </div>
                      </div>
                      <div className="feed-element">
                        <a href="profile.html" className="pull-left">
                          <img alt="show test" className="img-circle" src={a2}/>
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">46h ago</small>
                          <strong>Asim</strong> started following <strong>Ashwaq</strong>. <br/>
                          <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-primary btn-block m-t"><i className="fa fa-arrow-down" /> Show
                              More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Alpha project</h5>
                  <div className="ibox-tools">
                    <a className="collapse-link">
                      <i className="fa fa-chevron-up" />
                    </a>
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i className="fa fa-wrench" />
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                      <li><a href="#">Config option 1</a>
                      </li>
                      <li><a href="#">Config option 2</a>
                      </li>
                    </ul>
                    <a className="close-link">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                <div className="ibox-content ibox-heading">
                  <h3>You have meeting today!</h3>
                  <small><i className="fa fa-map-marker" /> Meeting is on 6:00am. Check your schedule to see
                            detail.
                  </small>
                </div>
                <div className="ibox-content inspinia-timeline">

                  <div className="timeline-item">
                    <div className="row">
                      <div className="col-sm-3 date">
                        <i className="fa fa-briefcase" />
                                6:00 am
                        <br/>
                        <small className="text-navy">2 hour ago</small>
                      </div>
                      <div className="col-sm-7 content no-top-border">
                        <p className="m-b-xs"><strong>Meeting</strong></p>
                        <p>Conference on the sales results for the previous year. Monica please examine sales
                                  trends in marketing and products. Below please find the current status of the
                                  sale.</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="row">
                      <div className="col-sm-3 date">
                        <i className="fa fa-file-text" />
                                7:00 am
                        <br/>
                        <small className="text-navy">3 hour ago</small>
                      </div>
                      <div className="col-sm-7 content">
                        <p className="m-b-xs"><strong>Send documents to Mike</strong></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                  Ipsum has been the industry's standard dummy text ever since.</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="row">
                      <div className="col-sm-3 date">
                        <i className="fa fa-coffee" />
                                8:00 am
                        <br/>
                      </div>
                      <div className="col-sm-7 content">
                        <p className="m-b-xs"><strong>Coffee Break</strong></p>
                        <p>
                                  Go to shop and find some products.
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                  has been the industry's.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="row">
                      <div className="col-sm-3 date">
                        <i className="fa fa-phone" />
                                11:00 am
                        <br/>
                        <small className="text-navy">21 hour ago</small>
                      </div>
                      <div className="col-sm-7 content">
                        <p className="m-b-xs"><strong>Phone with Jeronimo</strong></p>
                        <p>
                                  Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="row">
                      <div className="col-sm-3 date">
                        <i className="fa fa-user-md" />
                                09:00 pm
                        <br/>
                        <small>21 hour ago</small>
                      </div>
                      <div className="col-sm-7 content">
                        <p className="m-b-xs"><strong>Go to the doctor dr Zaighum</strong></p>
                        <p>
                                  Find some issue and go to doctor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="row">
                      <div className="col-sm-3 date">
                        <i className="fa fa-comments" />
                                12:50 pm
                        <br/>
                        <small className="text-navy">48 hour ago</small>
                      </div>
                      <div className="col-sm-7 content">
                        <p className="m-b-xs"><strong>Chat with Monica and Sandra</strong></p>
                        <p>
                                  Web sites still in their infancy. Various versions have evolved over the years,
                                  sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
