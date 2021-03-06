import React from 'react';
import { Link } from 'react-router-dom';

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

      <div className="album py-2 bg-light">
        <div className="container">
          <div className="row">
            {selected_categories.map((category) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src={`/images/category-images/sports-category-images/${category.category_photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      <Link to="view-super-stars">
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

export default SelectedCategory;
