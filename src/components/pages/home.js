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
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center m-t-lg">
                <h1> Página Home</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
