import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ResponsiveHeader from './components/layout/Responsive-Header';
import TopBar from './components/layout/TopBar';
import BannerPhoto from './components/layout/Banner-Photo';
import MainContentLayout from './components/main-content/layout/Main-Content-Layout';
import DesireCategory from './components/category-selection/Desire-Category';
import Header from './components/category-selection/layout/Header';
import ChooseCategory from './components/category-selection/Choose-Category';
import SelectedCategory from './components/category-selection/Selected-Category';
import ViewStars from './components/category-selection/View-Stars';
import TimeLine from './components/main-content/Time-Line';
import CategorySelectionRoutes from './components/category-selection/Category-Selection-Routes';

import UserResponsiveHeader from './components/user/layout/Responsive-Header';
import UserTopBar from './components/user/layout/TopBar';
import UserMainContentLayout from './components/user/layout/Main-Content-Layout';
import UserBannerPhoto from './components/user/layout/Banner-Photo';
import Input from './components/user/layout/Input';
import Shop from './components/shop/Shop';

function App() {
  const { url } = useRouteMatch();
  const p = (
    <>
      <ResponsiveHeader />
      <TopBar />
      {!url.split('/').includes('user') ? <BannerPhoto /> : <UserBannerPhoto />}
    </>
  );

  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />

        <CategorySelectionRoutes
          exact
          path="/choose-category"
          component={ChooseCategory}
        />
        <CategorySelectionRoutes exact path="/shop" component={Shop} />
        <CategorySelectionRoutes
          exact
          path="/select-category"
          component={DesireCategory}
        />
        <CategorySelectionRoutes
          path="/selected-category"
          component={SelectedCategory}
        />
        <CategorySelectionRoutes
          exact
          path="/view-super-stars"
          component={ViewStars}
        />

        <Route
          path={'/user(/.+)?'}
          render={() => (
            <>
              <div className="theme-layout">
                {p}
                {/*<Route exact path="/time-line">
                  <TimeLine />
                </Route>*/}
                <UserMainContentLayout />
              </div>
            </>
          )}
        />

        <Route
          path={'/(.+)'}
          render={() => (
            <>
              <div className="theme-layout">
                {p}
                {/*<Route exact path="/time-line">
                  <TimeLine />
                </Route>*/}
                <MainContentLayout />
              </div>
            </>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
