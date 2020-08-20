/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/LoadingScreen';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/app" />
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./pages/Error404View'))
  },
  {
    path: '*',
    layout: MainLayout,

    routes: [
      {
        exact: true,
        path: '/app',
        component: lazy(() => import('./pages/LeadsMonitor'))
      }
    ]
  }
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
