import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../theme/content';
import { Link } from 'react-router-dom';

class Compose extends Component {
  render() {
    return (
      <Content>
        <div className="row">
          <div className="col-lg-3">
            <div className="ibox float-e-margins">
              <div className="ibox-content mailbox-content">
                <div className="file-manager">

                  <div className="space-25"/>
                  <h5>Folders</h5>
                  <ul className="folder-list m-b-md" style={{ padding: '0' }}>
                    <li><Link to="/app/inbox"> <i className="fa fa-inbox "/> Inbox <span
                      className="label label-warning pull-right">16</span> </Link></li>
                    <li><Link to="/app/compose"> <i className="fa fa-envelope-o"/> Send Mail</Link></li>
                    <li><Link to="/app/inbox"> <i className="fa fa-certificate"/> Important</Link></li>
                    <li><Link to="/app/inbox"> <i className="fa fa-file-text-o"/> Drafts <span
                      className="label label-danger pull-right">2</span></Link></li>
                    <li><Link to="/app/inbox"> <i className="fa fa-trash-o"/> Trash</Link></li>
                  </ul>
                  <h5>Categories</h5>
                  <ul className="category-list" style={{ padding: '0' }}>
                    <li><a href="#"> <i className="fa fa-circle text-navy" /> Work </a></li>
                    <li><a href="#"> <i className="fa fa-circle text-danger" /> Documents</a></li>
                    <li><a href="#"> <i className="fa fa-circle text-primary" /> Social</a></li>
                    <li><a href="#"> <i className="fa fa-circle text-info" /> Advertising</a></li>
                    <li><a href="#"> <i className="fa fa-circle text-warning" /> Clients</a></li>
                  </ul>

                  <h5 className="tag-title">Labels</h5>
                  <ul className="tag-list" style={{ padding: '0' }}>
                    <li><a href=""><i className="fa fa-tag" /> Family</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Work</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Home</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Children</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Holidays</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Music</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Photography</a></li>
                    <li><a href=""><i className="fa fa-tag" /> Film</a></li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 animated fadeInRight">
            <div className="mail-box-header">
              <div className="pull-right tooltip-demo">
                <a href="mailbox.html" className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                  title="Move to draft folder"><i className="fa fa-pencil" /> Draft</a>
                <a href="mailbox.html" className="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top"
                  title="Discard email"><i className="fa fa-times" /> Discard</a>
              </div>
              <h2>
                Compse mail
              </h2>
            </div>
            <div className="mail-box">

              <div className="mail-body">

                <form className="form-horizontal" method="get">
                  <div className="form-group"><label className="col-sm-2 control-label">To:</label>

                    <div className="col-sm-10"><input type="text" className="form-control"
                      value="alex.smith@corporat.com"/></div>
                  </div>
                  <div className="form-group"><label className="col-sm-2 control-label">Subject:</label>

                    <div className="col-sm-10"><input type="text" className="form-control" value=""/></div>
                  </div>
                </form>

              </div>

              <div className="mail-text h-200">

                <div className="summernote">
                  <h3>Hello Jonathan! </h3>
                  dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the
                  industry's</strong> standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with
                  <br/>
                  <br/>

                </div>
                <div className="clearfix" />
              </div>
              <div className="mail-body text-right tooltip-demo">
                <a href="mailbox.html" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                  title="Send"><i className="fa fa-reply" /> Send</a>
                <a href="mailbox.html" className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                  title="Discard email"><i className="fa fa-times" /> Discard</a>
                <a href="mailbox.html" className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                  title="Move to draft folder"><i className="fa fa-pencil" /> Draft</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Compose);
