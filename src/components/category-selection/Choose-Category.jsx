import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Div = styled.div``;

// const Album = styled(Div).attrs({
//   className: 'album py-5',
// })`
//   position: relative;
//   z-index: 1;
//   padding-top: 20rem;
//   /* height: calc(100vh - 116px); */
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background-color: #000;
//     opacity: 0.8;
//     display: ${(props) => (props.show ? 'block' : 'none')};
//     z-index: 0;
//   }
// `;

// const Card = styled.div`
//   width: 5rem;
//   background-image: ${(props) =>
//     `url(images/category-images/${props.img.toLowerCase()}.png)`};
//   background-size: 100%;
//   background-repeat: no-repeat;
//   width: 100%;
//   height: 10rem;
//   transform: ${(props) =>
//     props.choices.includes(props.img) ? 'scale(1.5)' : 'scale(1)'};
//   transition: transform 0.5s ease-in-out;
//   text-align: center;
//   position: relative;
//   z-index: ${(props) => (props.choices.includes(props.img) ? '1' : '0')};
//   cursor: pointer;
// `;

const Card = styled.div`
  list-style: none;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 150%;
    width: 100%;
  }

  & .card__background {
    background-size: cover;
    background-position: center;
    /* border: ${(props) =>
      props.choices.includes(props.category_name)
        ? '4px solid #2ecc71'
        : '4px solid #f0d372'}; */
    border: calc(1px + 0.2vw) solid transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${(props) =>
      props.choices.includes(props.category_name) &&
      '0px 0px 19px 0px #2ecc71'};
    /* border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%; */
    border-radius: 10px;
    bottom: 0;
    filter: brightness(0.75) saturate(1.2) contrast(0.85);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center;
    transform: scale(1) translateZ(0);
    transition: filter 200ms linear, transform 200ms linear;
  }

  & .card__content {
    left: 0;
    padding: var(--spacing-l);
    position: absolute;
    bottom: 0;
  }

  /* & .card__content .card__category {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-s);
    text-transform: uppercase;
  } */

  & .card__content .card__heading {
    color: var(--text-lighter);
    font-size: 1.4rem;
    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.4;
    word-spacing: 100vw;
  }

  &:hover {
    .card__background {
      transform: scale(1.05) translateZ(0);
      box-shadow: 0px 0px 19px 0px #fcc201;
    }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
  &:hover > ${Card}:not(:hover) .card__background {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }
`;

const ChooseCategory = () => {
  const [choices, setchoices] = useState([]);

  useEffect(() => {
    localStorage.setItem('choices', choices);
  }, [choices]);

  const categories = [
    {
      category_name: 'FilmStar',
    },
    {
      category_name: 'Sports',
    },
    {
      category_name: 'Musicians',
    },
    {
      category_name: 'Dancers',
    },
    {
      category_name: 'Chefs',
    },
    {
      category_name: 'Drama',
    },
    {
      category_name: 'Tech',
    },
    {
      category_name: 'Motivational',
    },
    {
      category_name: 'Religion',
    },
    {
      category_name: 'Comedians',
    },
    {
      category_name: 'Social',
    },
  ];

  const addChoiceHandler = (choice) => {
    setchoices((prevState) => {
      return !prevState.includes(choice)
        ? [...prevState, choice]
        : prevState.filter((el) => el !== choice);
    });
  };

  return (
    <>
      <section className="jumbotron text-center">
        <h1 className="jumbotron-heading">Choose Category</h1>
      </section>
      <div className="container">
        <div className="row">
          <CardGrid>
            {categories.map((category) => (
              // <div
              //   className="col-md-4"
              //   onClick={() => addChoiceHandler(category.category_name)}
              // >
              <Card
                onClick={() => addChoiceHandler(category.category_name)}
                choices={choices}
                category_name={category.category_name}
              >
                <div
                  className="card__background"
                  style={{
                    // backgroundImage: `url(images/category-images/${category.category_name.toLowerCase()}.png)`,
                    backgroundImage: `url(https://picsum.photos/200/300),linear-gradient(to right top, #b78628, #be8c26, #c59123, #cb971f, #d29d1b, #d8a218, #dda715, #e3ac11, #e9b10e, #f0b70a, #f6bc06, #fcc201)`,
                    // backgroundColor: '#f0d372',
                  }}
                ></div>
                <div className="card__content">
                  {/* <p className="card__category">
                      {choices.includes(category.category_name) && '✅'}
                    </p> */}
                  <h3 className="card__heading">{category.category_name}</h3>
                </div>
              </Card>
              // </div>
            ))}
          </CardGrid>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center m-5">
          <Link
            to="/select-category"
            className="btn btn-lg btn-outline-dark"
            style={{
              display: 'block',
              width: '60%',
            }}
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChooseCategory;
