import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
