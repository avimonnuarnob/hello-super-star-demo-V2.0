import React from 'react';
import styled from 'styled-components';

const AuthPageLeftPanel = () => {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <LandFeatureArea>
          <div className="land-meta">
            <h1 style={{ fontSize: '60px' }}>HelloSuperStars</h1>
            {/*<p>
              HelloSuperStar is free to use for as long as you want with two active
              projects.
            </p>*/}
            <div className="friend-logo">
              <FriendLogoImg
                src="images/logo-01.png"
                alt=""
                // style={{ width: '33%', marginTop: '3%' }}
              />
              {/*<span>
                <img src="images/logo-01.png" alt="" />
              </span>*/}
            </div>
            {/*<a href="#" title="" className="folow-me">
              Follow Us on
            </a>*/}
          </div>
        </LandFeatureArea>
      </div>
    </>
  );
};

const LandFeatureArea = styled.div`
  background: #000000d9 none repeat scroll 0 0;
  color: #fff;
  float: left;
  height: 100vh;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`;

const FriendLogoImg = styled.img`
  width: 33%;
  margin-top: 3%;
`;

export default AuthPageLeftPanel;
