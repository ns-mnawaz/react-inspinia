import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Content from '../../theme/content';
import Header from '../../theme/header';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header title="Dashboard">
          <Link to="/app/page1" className="btn btn-warning btn-sm">page1</Link>
        </Header>
        <Content>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center m-t-lg">
                <h1> Página dashboard</h1>
                <small>
                  asadasd asaa
                </small>
              </div>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
