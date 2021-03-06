import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './layout/Layout';

const CategorySelectionRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default CategorySelectionRoutes;
