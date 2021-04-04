import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div``;

export const Box = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;
`;

export const Card = styled(Div).attrs({
  className: 'mb-4',
})`
  position: relative;
  width: 300px;
  height: 350px;
  background: linear-gradient(
    to right top,
    #b78628,
    #be8c26,
    #c59123,
    #cb971f,
    #d29d1b,
    #d8a218,
    #dda715,
    #e3ac11,
    #e9b10e,
    #f0b70a,
    #f6bc06,
    #fcc201
  );
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #dba514;
    transition: 0.5s;
    z-index: -1;
  }
  & .imgBx {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background: #222;
    transition: 0.5s;
    z-index: 1;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .details {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
    h2 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 20px;
      color: #000;
      text-transform: uppercase;
      a {
        font-weight: 500;
        font-size: 2rem;
        color: #fff;
        display: block;
        margin-top: 5px;
        text-shadow: 2px 5px 6px #000000;
      }
    }
  }

  &:hover {
    &:before {
      transform: rotate(20deg);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    }
    &:after {
      transform: rotate(10deg);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    }
    .imgBx {
      bottom: 80px;
    }
  }
`;

const SelectedCategory = ({ history }) => {
  const selected_categories = [
    {
      category_name: 'Football',
      category_photo: 'football.png',
    },
    {
      category_name: 'Cricket',
      category_photo: 'cricket.png',
    },
    {
      category_name: 'Tennis',
      category_photo: 'tennis.png',
    },
    {
      category_name: 'Golf',
      category_photo: 'golf.png',
    },
  ];
  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Select Category</h1>
        </div>
      </section>

      <div className="album py-2">
        <div className="container">
          <Box>
            {selected_categories.map((category) => (
              <Card>
                <div class="imgBx">
                  <img
                    src={`/images/category-images/sports-category-images/${category.category_photo}`}
                    alt="images"
                  />
                </div>
                <div class="details">
                  <h2>
                    {' '}
                    <Link to="/view-super-stars">{category.category_name}</Link>
                  </h2>
                </div>
              </Card>
            ))}
          </Box>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 mb-5" style={{ marginLeft: '45%' }}>
            <button
              className="btn btn-lg btn-outline-dark"
              onClick={history.goBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCategory;
