import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DesireCategory = ({ history }) => {
  const choices = localStorage.getItem('choices').split(',');

  const categories = [
    {
      category_name: 'Film Star',
      category_photo: 'filmstars.png',
    },
    {
      category_name: 'Sports',
      category_photo: 'sports.png',
    },
    {
      category_name: 'Musicians',
      category_photo: 'musicians.png',
    },
    {
      category_name: 'Dancers',
      category_photo: 'dancers.png',
    },
    {
      category_name: 'Chefs',
      category_photo: 'chefs.png',
    },
    {
      category_name: 'Drama',
      category_photo: 'drama.png',
    },
    {
      category_name: 'Tech',
      category_photo: 'tech.png',
    },
    {
      category_name: 'Motivational Speaker',
      category_photo: 'motivational.png',
    },
    {
      category_name: 'Religion',
      category_photo: 'religion.png',
    },
    {
      category_name: 'Comedians',
      category_photo: 'comedians.png',
    },
    {
      category_name: 'Social',
      category_photo: 'social.png',
    },
    {
      category_name: 'Models',
      category_photo: 'model.png',
    },
  ];
  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Select Category</h1>
        </div>
      </section>

      <div className="album py-2 bg-light">
        <div className="container">
          <div className="row">
            {categories
              .filter((el) => choices.includes(el.category_name))
              .map((category) => (
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      src={`images/category-images/${category.category_photo}`}
                      alt="Card image cap"
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title">
                        <Link to="/selected-category">
                          {category.category_name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
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

export default DesireCategory;
