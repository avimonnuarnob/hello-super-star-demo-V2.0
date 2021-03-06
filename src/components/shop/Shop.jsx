import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Shop = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const ss = useQuery().get('ss');
  console.log(ss);

  return (
    <>
      <section>
        <div className="ext-gap bluesh high-opacity">
          <div
            className="content-bg-wrap"
            style={{ background: 'url(images/resources/animated-bg2.png)' }}
          ></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-banner">
                  <h1>{ss ? `${ss}'s Shop` : `Our Shop`}</h1>
                  <nav className="breadcrumb">
                    <Link to="/" className="breadcrumb-item">
                      Home
                    </Link>
                    <span className="breadcrumb-item active">Shop</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="gap100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shop-page">
                  {/* <div className="shop-filter-sec d-flex justify-content-between">
                    <div className="shop-filter">
                      <select>
                        <option>choose your pokemon</option>
                        <option>newest</option>
                        <option>price low to high</option>
                        <option>price high to low</option>
                        <option>sort by average rating</option>
                      </select>
                    </div>
                    <div className="shop-filter">
                      <select>
                        <option>sort by</option>
                        <option>newest</option>
                        <option>price low to high</option>
                        <option>price high to low</option>
                        <option>sort by average rating</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="row">
                    {!ss || ss === 'shakib' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <span className="new">New</span>
                            <img
                              src="images/shop/shakib/8ee797780d31752bd380ef33560d7216.jpg"
                              alt=""
                            />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                GSound wireless Headphone
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$29</ins>
                              <del>$39</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {!ss || ss === 'shakib' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <span className="hot">Hot</span>
                            <img src="images/shop/shakib/download.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                High className Men watch
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$29</ins>
                              <del>$39</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {!ss || ss === 'shakib' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <img src="images/shop/shakib/shop9.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Shoes for Men
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$49</ins>
                              <del>$59</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'jamal' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <span className="sale">sale</span>
                            <img
                              src="images/shop/jamal/shop-masn1.jpg"
                              alt=""
                            />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Leather Pent Belt
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$29</ins>
                              <del>$39</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'jamal' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <img
                              src="images/shop/jamal/shop-masn2.jpg"
                              alt=""
                            />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Ladies Fancy Shoes
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$19</ins>
                              <del>$29</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'porimoni' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <img src="images/shop/porimoni/shop6.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                New Trending Hat
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$20</ins>
                              <del>$30</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'jamal' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <span className="sale">sale</span>
                            <img
                              src="images/shop/jamal/shop-masn3.jpg"
                              alt=""
                            />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Travel bag
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$149</ins>
                              <del>$200</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'jamal' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <img src="images/shop/jamal/shop1.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Side alaram
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$40</ins>
                              <del>$50</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'porimoni' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <span className="new">new</span>
                            <img src="images/shop/porimoni/shop5.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Men's watch
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$19</ins>
                              <del>$29</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'porimoni' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <img src="images/shop/porimoni/shop6.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                New Leather Shoes
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$20</ins>
                              <del>$30</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'porimoni' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <span className="hot">hot</span>
                            <img src="images/shop/porimoni/shop8.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                headphone jbond
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$149</ins>
                              <del>$200</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {!ss || ss === 'dev' ? (
                      <div className="col-lg-3 col-sm-6">
                        <div className="product-box">
                          <figure>
                            <img src="images/shop/dev/shop2.jpg" alt="" />
                            <ul className="cart-optionz">
                              <li>
                                <a
                                  href="#"
                                  title="Add Cart"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Quick Shop"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Wishlist"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Compare"
                                  data-toggle="tooltip"
                                >
                                  <i className="ti-split-v-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </figure>
                          <div className="product-name">
                            <h5>
                              <a href="#" title="">
                                Leather Pent Belt
                              </a>
                            </h5>
                            <ul className="starz">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <div className="prices">
                              <ins>$40</ins>
                              <del>$50</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* <div className="col-lg-12">
                      <ul className="paginationz">
                        <li className="prev">
                          <a title="" href="#">
                            <i className="fa fa-angle-left"></i>
                          </a>
                        </li>
                        <li>
                          <a title="" href="#">
                            01
                          </a>
                        </li>
                        <li>
                          <a title="" href="#" className="active">
                            02
                          </a>
                        </li>
                        <li>
                          <a title="" href="#">
                            03
                          </a>
                        </li>
                        <li>
                          <a title="" href="#">
                            04
                          </a>
                        </li>
                        <li className="space">.......</li>
                        <li>
                          <a title="" href="#">
                            21
                          </a>
                        </li>
                        <li className="next">
                          <a title="" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
