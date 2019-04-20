/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../theme/content';
import Header from '../../theme/header';

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Dashboard"/>
        <Content>
          <div className="row  border-bottom white-bg dashboard-header">

            <div className="col-sm-3">
              <h2>Welcome Get Hired !!!</h2>
              <small>You have 42 messages and 6 notifications.</small>
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
              <div className="flot-chart dashboard-chart">
                <div className="flot-chart-content" id="flot-dashboard-chart" />
              </div>
              <div className="row text-left">
                <div className="col-xs-4">
                  <div className=" m-l-md">
                    <span className="h4 font-bold m-t block">$ 406,100</span>
                    <small className="text-muted m-b block">Sales marketing report</small>
                  </div>
                </div>
                <div className="col-xs-4">
                  <span className="h4 font-bold m-t block">$ 150,401</span>
                  <small className="text-muted m-b block">Annual sales revenue</small>
                </div>
                <div className="col-xs-4">
                  <span className="h4 font-bold m-t block">$ 16,822</span>
                  <small className="text-muted m-b block">Half-year revenue margin</small>
                </div>

              </div>
            </div>
            <div className="col-sm-3">
              <div className="statistic-box">
                <h4>
                            Project Beta progress
                </h4>
                <p>
                            You have two project with not compleated task.
                </p>
                <div className="row text-center">
                  <div className="col-lg-6">
                    <canvas id="polarChart" width="80" height="80" />
                    <h5 >Kolter</h5>
                  </div>
                  <div className="col-lg-6">
                    <canvas id="doughnutChart" width="78" height="78" />
                    <h5 >Maxtor</h5>
                  </div>
                </div>
                <div className="m-t">
                  <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                </div>

              </div>
            </div>

          </div>
        </Content>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
