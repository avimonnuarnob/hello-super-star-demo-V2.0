import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RightSidebarFriendList from './Right-Sidebar-FriendList';
import LeftSidebarMenu from './Left-Sidebar-Menu';
import TimeLine from '../Time-Line';
import TimeLineFriends from '../Time-Line-Friends';
import TimeLinePhotos from '../Time-Line-Photos';
import TimeLineVideos from '../Time-Line-Videos';
import TimeLineGroups from '../Time-Line-Groups';
import TimeLineAbout from '../Time-Line-About';
import Activites from '../Activites';

const MainContentLayout = () => {
  return (
    <>
      <section>
        <div className="gap gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="row merged20" id="page-contents">
                  {/*left sidebar*/}

                  {/*Main Content*/}
                  <Switch>
                    <Route exact path="/time-line/saakib">
                      <TimeLine />
                    </Route>
                    <Route exact path="/timeline-friends/saakib">
                      <TimeLineFriends />
                    </Route>
                    <Route exact path="/timeline-photos/saakib">
                      <TimeLinePhotos />
                    </Route>
                    <Route exact path="/timeline-videos/saakib">
                      <TimeLineVideos />
                    </Route>
                    <Route exact path="/activites/saakib">
                      <Activites />
                    </Route>
                    <Route exact path="/timeline-about/saakib">
                      <TimeLineAbout />
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
