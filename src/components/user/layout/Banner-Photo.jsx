import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import LeftSidebarMenu from '../../main-content/layout/Left-Sidebar-Menu';
import RightSidebarFriendList from '../../main-content/layout/Right-Sidebar-FriendList';
import TimeLineFriends from '../../main-content/Time-Line-Friends';

const BannerPhoto = (props) => {
  return (
    <>
      <section>
        <div className="feature-photo">
          <figure>
            <img src="/images/resources/timeline-1.jpg" alt="" />
          </figure>
          <div className="add-btn">
            <span>1205 followers</span>
            <a href="/time-line" title="" data-ripple="">
              Add Friend
            </a>
          </div>
          <form className="edit-phto">
            <i className="fa fa-camera-retro" />
            <label className="fileContainer">
              Edit Cover Photo
              <input type="file" />
            </label>
          </form>
          <div className="container-fluid">
            <div className="row merged">
              <div className="col-lg-2 col-sm-3">
                <div className="user-avatar">
                  <figure>
                    <img src="/images/resources/user-avatar.jpg" alt="" />
                    <form className="edit-phto">
                      <i className="fa fa-camera-retro"></i>
                      <label className="fileContainer">
                        Edit Display Photo
                        <input type="file" />
                      </label>
                    </form>
                  </figure>
                </div>
              </div>
              <div className="col-lg-10 col-sm-9">
                <div className="timeline-info">
                  <ul>
                    <li className="admin-name">
                      <h5>সাকিব্বায়ের বিরাট ফ্যান </h5>
                      {/*<span>Group Admin</span>*/}
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPhoto;
