/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../theme/content';
import a1 from '../../assets/img/a1.jpg';
import a2 from '../../assets/img/a2.jpg';
import a3 from '../../assets/img/a3.jpg';
import a4 from '../../assets/img/a5.jpg';
import a5 from '../../assets/img/a4.jpg';
import a6 from '../../assets/img/a6.jpg';
import profile from '../../assets/img/avatar9.jpg';
import gallery from '../../assets/img/gallery/3.jpg';

class Profile extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="row m-b-lg m-t-lg">
            <div className="col-md-6">

              <div className="profile-image">
                <img src={profile} className="img-circle circle-border m-b-md" alt="profile"/>
              </div>
              <div className="profile-info">
                <div className="">
                  <div>
                    <h2 className="no-margins">
                                        Mir Nawaz
                    </h2>
                    <h4>Software Developer</h4>
                    <small>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form Ipsum available.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <table className="table small m-b-xs">
                <tbody>
                  <tr>
                    <td>
                      <strong>142</strong> Projects
                    </td>
                    <td>
                      <strong>22</strong> Followers
                    </td>

                  </tr>
                  <tr>
                    <td>
                      <strong>61</strong> Comments
                    </td>
                    <td>
                      <strong>54</strong> Articles
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>154</strong> Tags
                    </td>
                    <td>
                      <strong>32</strong> Friends
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <small>Sales in last 24h</small>
              <h2 className="no-margins">206 480</h2>
              <div id="sparkline1" />
            </div>


          </div>
          <div className="row">

            <div className="col-lg-3">

              <div className="ibox">
                <div className="ibox-content">
                  <h3>About Mir Nawaz</h3>

                  <p className="small">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't.
                    <br/>
                    <br/>
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything embarrassing
                  </p>

                  <p className="small font-bold">
                    <span><i className="fa fa-circle text-navy" /> Online status</span>
                  </p>

                </div>
              </div>

              <div className="ibox">
                <div className="ibox-content">
                  <h3>Followers and friends</h3>
                  <p className="small">
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything embarrassing
                  </p>
                  <div className="user-friends">
                    <a href=""><img alt="show 1" className="img-circle" src={a4}/></a>
                    <a href=""><img alt="show 2" className="img-circle" src={a3}/></a>
                    <a href=""><img alt="show 3" className="img-circle" src={a2}/></a>
                    <a href=""><img alt="show 4" className="img-circle" src={a1}/></a>
                    <a href=""><img alt="show 5" className="img-circle" src={a6}/></a>
                    <a href=""><img alt="show 6" className="img-circle" src={a5}/></a>
                    <a href=""><img alt="show 7" className="img-circle" src={a4}/></a>
                    <a href=""><img alt="show 9" className="img-circle" src={a3}/></a>
                    <a href=""><img alt="show 01" className="img-circle" src={a2}/></a>
                    <a href=""><img alt="show 11" className="img-circle" src={a1}/></a>
                  </div>
                </div>
              </div>

              <div className="ibox">
                <div className="ibox-content">
                  <h3>Personal friends</h3>
                  <ul className="list-unstyled file-list">
                    <li><a href=""><i className="fa fa-file" /> Project_document.docx</a></li>
                    <li><a href=""><i className="fa fa-file-picture-o" /> Logo_zender_company.jpg</a></li>
                    <li><a href=""><i className="fa fa-stack-exchange" /> Email_from_Alex.mln</a></li>
                    <li><a href=""><i className="fa fa-file" /> Contract_20_11_2014.docx</a></li>
                    <li><a href=""><i className="fa fa-file-powerpoint-o" /> Presentation.pptx</a></li>
                    <li><a href=""><i className="fa fa-file" /> 10_08_2015.docx</a></li>
                  </ul>
                </div>
              </div>

              <div className="ibox">
                <div className="ibox-content">
                  <h3>Private message</h3>

                  <p className="small">
                                    Send private message to Alex Smith
                  </p>

                  <div className="form-group">
                    <label>Subject</label>
                    <input type="email" className="form-control" placeholder="Message subject"/>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" placeholder="Your message" rows="3" />
                  </div>
                  <button className="btn btn-primary btn-block">Send</button>

                </div>
              </div>

            </div>

            <div className="col-lg-5">

              <div className="social-feed-box">

                <div className="pull-right social-action dropdown">
                  <button data-toggle="dropdown" className="dropdown-toggle btn-white">
                    <i className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu m-t-xs">
                    <li><a href="#">Config</a></li>
                  </ul>
                </div>
                <div className="social-avatar">
                  <a href="" className="pull-left">
                    <img alt="show test" src={a5}/>
                  </a>
                  <div className="media-body">
                    <a href="#">
                                        Andrew Williams
                    </a>
                    <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                  </div>
                </div>
                <div className="social-body">
                  <p>
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy. Packages and web page editors now use Lorem Ipsum as their
                                    default model text.
                  </p>
                  <div className="btn-group">
                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up" /> Like this!</button>
                    <button className="btn btn-white btn-xs"><i className="fa fa-comments" /> Comment</button>
                    <button className="btn btn-white btn-xs"><i className="fa fa-share" /> Share</button>
                  </div>
                </div>
                <div className="social-footer">
                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={a5}/>
                    </a>
                    <div className="media-body">
                      <a href="#">
                                            Andrew Williams
                      </a>
                                        Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                      <br/>
                      <a href="#" className="small"><i className="fa fa-thumbs-up" /> 26 Like this!</a> -
                      <small className="text-muted">12.06.2014</small>
                    </div>
                  </div>

                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={a5}/>
                    </a>
                    <div className="media-body">
                      <a href="#">
                                            Andrew Williams
                      </a>
                                        Making this the first true generator on the Internet. It uses a dictionary of.
                      <br/>
                      <a href="#" className="small"><i className="fa fa-thumbs-up" /> 11 Like this!</a> -
                      <small className="text-muted">10.07.2014</small>
                    </div>
                  </div>

                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={profile}/>
                    </a>
                    <div className="media-body">
                      <textarea className="form-control" placeholder="Write comment..." />
                    </div>
                  </div>

                </div>

              </div>

              <div className="social-feed-box">

                <div className="pull-right social-action dropdown">
                  <button data-toggle="dropdown" className="dropdown-toggle btn-white">
                    <i className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu m-t-xs">
                    <li><a href="#">Config</a></li>
                  </ul>
                </div>
                <div className="social-avatar">
                  <a href="" className="pull-left">
                    <img alt="show test" src={a5}/>
                  </a>
                  <div className="media-body">
                    <a href="#">
                                        Andrew Williams
                    </a>
                    <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                  </div>
                </div>
                <div className="social-body">
                  <p>
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy. Packages and web page editors now use Lorem Ipsum as their
                                    default model text.
                  </p>
                  <p>
                                    Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy. Packages and web page editors now use Lorem Ipsum as their
                                    default model text.
                  </p>
                  <img src={gallery} className="img-responsive" alt="responsive show"/>
                  <div className="btn-group">
                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up" /> Like this!</button>
                    <button className="btn btn-white btn-xs"><i className="fa fa-comments" /> Comment</button>
                    <button className="btn btn-white btn-xs"><i className="fa fa-share" /> Share</button>
                  </div>
                </div>
                <div className="social-footer">
                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={a5}/>
                    </a>
                    <div className="media-body">
                      <a href="#">
                                            Andrew Williams
                      </a>
                                        Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                      <br/>
                      <a href="#" className="small"><i className="fa fa-thumbs-up" /> 26 Like this!</a> -
                      <small className="text-muted">12.06.2014</small>
                    </div>
                  </div>

                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={a5}/>
                    </a>
                    <div className="media-body">
                      <a href="#">
                                            Andrew Williams
                      </a>
                                        Making this the first true generator on the Internet. It uses a dictionary of.
                      <br/>
                      <a href="#" className="small"><i className="fa fa-thumbs-up" /> 11 Like this!</a> -
                      <small className="text-muted">10.07.2014</small>
                    </div>
                  </div>

                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={a4}/>
                    </a>
                    <div className="media-body">
                      <a href="#">
                                            Andrew Williams
                      </a>
                                        Making this the first true generator on the Internet. It uses a dictionary of.
                      <br/>
                      <a href="#" className="small"><i className="fa fa-thumbs-up" /> 11 Like this!</a> -
                      <small className="text-muted">10.07.2014</small>
                    </div>
                  </div>

                  <div className="social-comment">
                    <a href="" className="pull-left">
                      <img alt="show test" src={profile}/>
                    </a>
                    <div className="media-body">
                      <textarea className="form-control" placeholder="Write comment..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-b-lg">
              <div id="vertical-timeline" className="vertical-container light-timeline no-margins">
                <div className="vertical-timeline-block">
                  <div className="vertical-timeline-icon navy-bg">
                    <i className="fa fa-briefcase" />
                  </div>

                  <div className="vertical-timeline-content">
                    <h2>Meeting</h2>
                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.
                    </p>
                    <a href="#" className="btn btn-sm btn-primary"> More info</a>
                    <span className="vertical-date">
                                        Today <br/>
                      <small>Dec 24</small>
                    </span>
                  </div>
                </div>

                <div className="vertical-timeline-block">
                  <div className="vertical-timeline-icon blue-bg">
                    <i className="fa fa-file-text" />
                  </div>

                  <div className="vertical-timeline-content">
                    <h2>Send documents to Mike</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <a href="#" className="btn btn-sm btn-success"> Download document </a>
                    <span className="vertical-date">
                                        Today <br/>
                      <small>Dec 24</small>
                    </span>
                  </div>
                </div>

                <div className="vertical-timeline-block">
                  <div className="vertical-timeline-icon lazur-bg">
                    <i className="fa fa-coffee" />
                  </div>

                  <div className="vertical-timeline-content">
                    <h2>Coffee Break</h2>
                    <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                    <a href="#" className="btn btn-sm btn-info">Read more</a>
                    <span className="vertical-date"> Yesterday <br/><small>Dec 23</small></span>
                  </div>
                </div>

                <div className="vertical-timeline-block">
                  <div className="vertical-timeline-icon yellow-bg">
                    <i className="fa fa-phone" />
                  </div>

                  <div className="vertical-timeline-content">
                    <h2>Phone with Jeronimo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                    <span className="vertical-date">Yesterday <br/><small>Dec 23</small></span>
                  </div>
                </div>

                <div className="vertical-timeline-block">
                  <div className="vertical-timeline-icon navy-bg">
                    <i className="fa fa-comments" />
                  </div>

                  <div className="vertical-timeline-content">
                    <h2>Chat with Monica and Sandra</h2>
                    <p>Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
                    <span className="vertical-date">Yesterday <br/><small>Dec 23</small></span>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
