/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tree from 'rc-tree';
import DatePicker from 'react-datepicker';
import { PropTypes } from 'prop-types';

import Content from '../../theme/content';
import { getTreePermission } from '../../helpers/permissions';
import list from '../../constants/list';

class Permissions extends Component {
    static propTypes = {
      keys: PropTypes.array
    };
    static defaultProps = {
      keys: []
    };
    constructor(props) {
      super(props);
      const keys = props.keys;
      this.state = {
        defaultCheckedKeys: keys,
        treeData: getTreePermission(list.menu),
        startDate: new Date()
      };
    }

    onExpand = (expandedKeys) => {
      console.log('onExpand', expandedKeys); // eslint-disable-line no-console
    };
    onCheck = (checkedKeys, info) => {
      console.log('onCheck', checkedKeys, info); // eslint-disable-line no-console
    };

    render() {
      return (
        <div>
          <Content>
            <div className="row">
              <div className="col-lg-6">
                <div className="m-t-lg">
                  <div style={{ margin: '0 20px' }}>
                    <Tree
                      className="myCls"
                      showLine
                      checkable
                      selectable={ false }
                      defaultExpandAll
                      onExpand={this.onExpand}
                      draggable={false}
                      defaultCheckedKeys={this.state.defaultCheckedKeys}
                      onCheck={this.onCheck}
                      treeData={this.state.treeData}
                      showIcon={false}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group input-group m-b">
                  <h3>Date Picker</h3>
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-calendar"/></span>
                    <DatePicker
                      className="form-control"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      dateFormat="MM/dd/yyyy h:mm aa"
                      showTimeInput
                      placeholderText="Click to select a date"
                      isClearable
                    />
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      );
    }
    handleChange = (date) => {
      this.setState({
        startDate: date
      });
    };
}

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);
