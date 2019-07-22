/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../theme/content';
import { Checkbox } from 'react-icheck';
import { Link } from 'react-router-dom';

class Inbox extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="row">
            <div className="col-lg-3">
              <div className="ibox float-e-margins">
                <div className="ibox-content mailbox-content">
                  <div className="file-manager">
                    <Link className="btn btn-block btn-primary compose-mail" to="/app/compose">
                          Compose Mail
                    </Link>
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
                      <li><a href="#"> <i className="fa fa-circle text-navy"/> Work </a></li>
                      <li><a href="#"> <i className="fa fa-circle text-danger"/> Documents</a></li>
                      <li><a href="#"> <i className="fa fa-circle text-primary"/> Social</a></li>
                      <li><a href="#"> <i className="fa fa-circle text-info"/> Advertising</a></li>
                      <li><a href="#"> <i className="fa fa-circle text-warning"/> Clients</a></li>
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

                <form method="get" action="index.html" className="pull-right mail-search">
                  <div className="input-group">
                    <input type="text" className="form-control input-sm" name="search"
                      placeholder="Search email"/>
                    <div className="input-group-btn">
                      <button type="submit" className="btn btn-sm btn-primary">
                                            Search
                      </button>
                    </div>
                  </div>
                </form>
                <h2>
                            Inbox (16)
                </h2>
                <div className="mail-tools tooltip-demo m-t-md">
                  <div className="btn-group pull-right">
                    <button className="btn btn-white btn-sm"><i className="fa fa-arrow-left" /></button>
                    <button className="btn btn-white btn-sm"><i className="fa fa-arrow-right" /></button>

                  </div>
                  <button className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left"
                    title="Refresh inbox"><i className="fa fa-refresh" /> Refresh
                  </button>
                  <button className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                    title="Mark as read"><i className="fa fa-eye" /></button>
                  <button className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                    title="Mark as important"><i className="fa fa-exclamation" /></button>
                  <button className="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                    title="Move to trash"><i className="fa fa-trash-o" /></button>

                </div>
              </div>
              <div className="mail-box">

                <table className="table table-hover table-mail">
                  <tbody>
                    <tr className="unread">
                      <td className="check-mail">
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Anna Smith</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor noretek imit
                                    set.</a></td>
                      <td className=""><i className="fa fa-paperclip" /></td>
                      <td className="text-right mail-date">6.10 AM</td>
                    </tr>
                    <tr className="unread">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Jack Nowak</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Aldus PageMaker including
                                    versions of Lorem Ipsum.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">8.22 PM</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Facebook</a> <span
                        className="label label-warning pull-right">Clients</span></td>
                      <td className="mail-subject"><a href="mail_detail.html">Many desktop publishing packages
                                    and web page editors.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Jan 16</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Mailchip</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">There are many variations of
                                    passages of Lorem Ipsum.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Mar 22</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Alex T.</a> <span
                        className="label label-danger pull-right">Documents</span></td>
                      <td className="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor noretek imit
                                    set.</a></td>
                      <td className=""><i className="fa fa-paperclip" /></td>
                      <td className="text-right mail-date">December 22</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Monica Ryther</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">The standard chunk of Lorem
                                    Ipsum used.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Jun 12</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Sandra Derick</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Contrary to popular belief.</a>
                      </td>
                      <td className="" />
                      <td className="text-right mail-date">May 28</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Patrick Pertners</a> <span
                        className="label label-info pull-right">Adv</span></td>
                      <td className="mail-subject"><a href="mail_detail.html">If you are going to use a
                                    passage of Lorem </a></td>
                      <td className="" />
                      <td className="text-right mail-date">May 28</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Michael Fox</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Humour, or non-characteristic
                                    words etc.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Dec 9</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Damien Ritz</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Oor Lorem Ipsum is that it has a
                                    more-or-less normal.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Jun 11</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Anna Smith</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor noretek imit
                                    set.</a></td>
                      <td className=""><i className="fa fa-paperclip" /></td>
                      <td className="text-right mail-date">6.10 AM</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Jack Nowak</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Aldus PageMaker including
                                    versions of Lorem Ipsum.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">8.22 PM</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Mailchip</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">There are many variations of
                                    passages of Lorem Ipsum.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Mar 22</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Alex T.</a> <span
                        className="label label-warning pull-right">Clients</span></td>
                      <td className="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor noretek imit
                                    set.</a></td>
                      <td className=""><i className="fa fa-paperclip" /></td>
                      <td className="text-right mail-date">December 22</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Monica Ryther</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">The standard chunk of Lorem
                                    Ipsum used.</a></td>
                      <td className="" />
                      <td className="text-right mail-date">Jun 12</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Sandra Derick</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Contrary to popular belief.</a>
                      </td>
                      <td className="" />
                      <td className="text-right mail-date">May 28</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Patrick Pertners</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">If you are going to use a
                                    passage of Lorem </a></td>
                      <td className="" />
                      <td className="text-right mail-date">May 28</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Michael Fox</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Humour, or non-characteristic
                                    words etc.</a></td>
                      <td className=""/>
                      <td className="text-right mail-date">Dec 9</td>
                    </tr>
                    <tr className="read">
                      <td className="check-mail" >
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          checked={false}
                          name="checked"
                          cursor="pointer"
                          label=""
                        />
                      </td>
                      <td className="mail-ontact"><a href="mail_detail.html">Damien Ritz</a></td>
                      <td className="mail-subject"><a href="mail_detail.html">Oor Lorem Ipsum is that it has a
                                    more-or-less normal.</a></td>
                      <td className=""/>
                      <td className="text-right mail-date">Jun 11</td>
                    </tr>
                  </tbody>
                </table>


              </div>
            </div>
          </div>
        </Content>
      </div>
    );
  }
    handleChange = (e, value) => { // eslint-disable-line no-unused-vars

    };
}

const mapStateToProps = (state) => ({ teste: state.teste });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
