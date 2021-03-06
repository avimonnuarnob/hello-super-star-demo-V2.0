import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RightSidebarFriendList from '../../main-content/layout/Right-Sidebar-FriendList';
import LeftSidebarMenu from '../../main-content/layout/Left-Sidebar-Menu';
import TimeLine from '../../main-content/Time-Line';
import TimeLineFriends from '../../main-content/Time-Line-Friends';
import TimeLinePhotos from '../../main-content/Time-Line-Photos';
import TimeLineVideos from '../../main-content/Time-Line-Videos';
import TimeLineGroups from '../../main-content/Time-Line-Groups';
import TimeLineAbout from '../../main-content/Time-Line-About';

import Input from './Input';
import Achievement from './Achievement';

const MainContentLayout = () => {
  return (
    <>
      <section>
        <div className="gap gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row merged20" id="page-contents">
                  {/*left sidebar*/}
                  <LeftSidebarMenu />
                  {/*Main Content*/}
                  <Switch>
                    <Route path="/user/upload">
                      <Input />
                    </Route>
                    <Route path={`/user/Achievement`}>
                      <Achievement />
                    </Route>
                  </Switch>
                  {/*Right Sidebar*/}
                  <RightSidebarFriendList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContentLayout;
