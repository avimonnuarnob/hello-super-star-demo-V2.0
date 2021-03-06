import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebarMenu = () => {
  return (
    <>
      <div className="col-lg-3">
        <aside className="sidebar static">
          <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
              <li>
                <i className="ti-clipboard"></i>
                <a href="newsfeed.html" title="">
                  News feed
                </a>
              </li>
              <li>
                <i className="ti-mouse-alt"></i>
                <a href="inbox.html" title="">
                  Inbox
                </a>
              </li>
              <li>
                <i className="ti-files"></i>
                <a href="fav-page.html" title="">
                  My pages
                </a>
              </li>
              <li>
                <i className="ti-user"></i>
                <a href="timeline-friends.html" title="">
                  friends
                </a>
              </li>
              <li>
                <i className="ti-image"></i>
                <a href="timeline-photos.html" title="">
                  images
                </a>
              </li>
              <li>
                <i className="ti-video-camera"></i>
                <a href="timeline-videos.html" title="">
                  videos
                </a>
              </li>
              <li>
                <i className="ti-comments-smiley"></i>
                <a href="messages.html" title="">
                  Messages
                </a>
              </li>
              <li>
                <i className="ti-bell"></i>
                <a href="notifications.html" title="">
                  Notifications
                </a>
              </li>
              <li>
                <Link to="/user/upload">⭐ Interact With SuperStars</Link>
              </li>
              <li>
                <Link to="/user/achievement">🎯 Achievement</Link>
              </li>
              <li>
                <i className="ti-power-off"></i>
                <a href="landing.html" title="">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h4 className="widget-title">Recent Activity</h4>
            <ul className="activitiez">
              <li>
                <div className="activity-meta">
                  <i>10 hours Ago</i>
                  <span>
                    <a href="#" title="">
                      Commented on Video posted{' '}
                    </a>
                  </span>
                  <h6>
                    by <a href="newsfeed.html">black demon.</a>
                  </h6>
                </div>
              </li>
              <li>
                <div className="activity-meta">
                  <i>30 Days Ago</i>
                  <span>
                    <a href="newsfeed.html" title="">
                      Posted your status. “Hello guys, how are you?”
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="activity-meta">
                  <i>2 Years Ago</i>
                  <span>
                    <a href="#" title="">
                      Share a video on her timeline.
                    </a>
                  </span>
                  <h6>
                    "<a href="newsfeed.html">you are so funny mr.been.</a>"
                  </h6>
                </div>
              </li>
            </ul>
          </div>

          <div className="widget stick-widget">
            <h4 className="widget-title">Who's follownig</h4>
            <ul className="followers">
              <li>
                <figure>
                  <img
                    src="/images/stars-images/sakib/sakib-profile-avatar.jpg"
                    alt=""
                  />
                </figure>
                <div className="friend-meta">
                  <h4>
                    <Link to="/time-line/saakib">SAAAKIB</Link>
                  </h4>
                  <a href="#" title="" className="underline">
                    Add Friend
                  </a>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar4.jpg" alt="" />
                </figure>
                <div className="friend-meta">
                  <h4>
                    <a href="time-line.html" title="">
                      Issabel
                    </a>
                  </h4>
                  <a href="#" title="" className="underline">
                    Add Friend
                  </a>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar6.jpg" alt="" />
                </figure>
                <div className="friend-meta">
                  <h4>
                    <a href="time-line.html" title="">
                      Andrew
                    </a>
                  </h4>
                  <a href="#" title="" className="underline">
                    Add Friend
                  </a>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar8.jpg" alt="" />
                </figure>
                <div className="friend-meta">
                  <h4>
                    <a href="time-line.html" title="">
                      Sophia
                    </a>
                  </h4>
                  <a href="#" title="" className="underline">
                    Add Friend
                  </a>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar3.jpg" alt="" />
                </figure>
                <div className="friend-meta">
                  <h4>
                    <a href="time-line.html" title="">
                      Allen
                    </a>
                  </h4>
                  <a href="#" title="" className="underline">
                    Add Friend
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default LeftSidebarMenu;
