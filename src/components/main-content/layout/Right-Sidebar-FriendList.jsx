import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebarFriendList = () => {
  return (
    <>
      <div className="col-lg-3">
        <aside className="sidebar static">
          <div className="widget">
            <div className="banner medium-opacity bluesh">
              <div
                // style="background-image: url(images/resources/baner-widgetbg.jpg)"
                className="bg-image"
              ></div>
              <div className="baner-top">
                <span>
                  <img src="images/book-icon.png" alt="" />
                </span>
                <i className="fa fa-ellipsis-h"></i>
              </div>
              <div className="banermeta">
                <p>create your own favourit page.</p>
                <span>like them all</span>
                <a href="#" title="" data-ripple="">
                  start now!
                </a>
              </div>
            </div>
          </div>
          <div className="widget friend-list stick-widget">
            <h4 className="widget-title">Friends</h4>
            <div id="searchDir"></div>
            <ul id="people-list" className="friendz-list">
              <li>
                <figure>
                  <img src="images/resources/friend-avatar2.jpg" alt="" />
                  <span className="status f-away"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">Sarah Loren</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="b1d3d0c3dfd4c2f1d6dcd0d8dd9fd2dedc"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar3.jpg" alt="" />
                  <span className="status f-off"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">jason borne</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="771d160418191537101a161e1b5914181a"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar4.jpg" alt="" />
                  <span className="status f-off"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">Cameron diaz</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="84eee5f7ebeae6c4e3e9e5ede8aae7ebe9"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar5.jpg" alt="" />
                  <span className="status f-online"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">daniel warber</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="5f353e2c30313d1f38323e3633713c3032"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar6.jpg" alt="" />
                  <span className="status f-away"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">andrew</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="b5dfd4c6dadbd7f5d2d8d4dcd99bd6dad8"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar7.jpg" alt="" />
                  <span className="status f-off"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">amy watson</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="3b515a485455597b5c565a525715585456"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar5.jpg" alt="" />
                  <span className="status f-online"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">daniel warber</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="264c475549484466414b474f4a0845494b"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar2.jpg" alt="" />
                  <span className="status f-away"></span>
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">Sarah Loren</a>
                  <i>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="432122312d263003242e222a2f6d202c2e"
                    >
                      [email&#160;protected]
                    </a>
                  </i>
                </div>
              </li>
            </ul>
            <div className="chat-box">
              <div className="chat-head">
                <span className="status f-online"></span>
                <h6>Bucky Barnes</h6>
                <div className="more">
                  <span>
                    <i className="ti-more-alt"></i>
                  </span>
                  <span className="close-mesage">
                    <i className="ti-close"></i>
                  </span>
                </div>
              </div>
              <div className="chat-list">
                <ul>
                  <li className="me">
                    <div className="chat-thumb">
                      <img src="images/resources/chatlist1.jpg" alt="" />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          dateTime="2004-07-24T18:18"
                          className="entry-date updated"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>
                  <li className="you">
                    <div className="chat-thumb">
                      <img src="images/resources/chatlist2.jpg" alt="" />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          dateTime="2004-07-24T18:18"
                          className="entry-date updated"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>
                  <li className="me">
                    <div className="chat-thumb">
                      <img src="images/resources/chatlist1.jpg" alt="" />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          dateTime="2004-07-24T18:18"
                          className="entry-date updated"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>
                </ul>
                <form className="text-box">
                  <textarea placeholder="Post enter to post..."></textarea>
                  <div className="add-smiles">
                    <span
                      title="add icon"
                      className="em em-expressionless"
                    ></span>
                  </div>
                  <div className="smiles-bunch">
                    <i className="em em---1"></i>
                    <i className="em em-smiley"></i>
                    <i className="em em-anguished"></i>
                    <i className="em em-laughing"></i>
                    <i className="em em-angry"></i>
                    <i className="em em-astonished"></i>
                    <i className="em em-blush"></i>
                    <i className="em em-disappointed"></i>
                    <i className="em em-worried"></i>
                    <i className="em em-kissing_heart"></i>
                    <i className="em em-rage"></i>
                    <i className="em em-stuck_out_tongue"></i>
                  </div>
                  <button type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default RightSidebarFriendList;
