import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'D:/Study/实训/练习/pagelxt/src/pages/.umi/LocaleWrapper.jsx';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/BlankLayout').default,
    routes: [
      {
        path: '/user',
        component: require('../../layouts/UserLayout').default,
        routes: [
          {
            path: '/user',
            redirect: '/user/login',
            exact: true,
          },
          {
            name: 'login',
            path: '/user/login',
            component: require('../user/login').default,
            exact: true,
          },
          {
            name: 'register-result',
            path: '/user/register-result',
            component: require('../user/register-result').default,
            exact: true,
          },
          {
            name: 'register',
            path: '/user/register',
            component: require('../user/register').default,
            exact: true,
          },
          {
            component: require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/',
        component: require('../../layouts/BasicLayout').default,
        Routes: [require('../Authorized').default],
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                name: 'analysis',
                path: '/dashboard/analysis',
                component: require('../dashboard/analysis').default,
                exact: true,
              },
              {
                name: 'monitor',
                path: '/dashboard/monitor',
                component: require('../dashboard/monitor').default,
                exact: true,
              },
              {
                name: 'workplace',
                path: '/dashboard/workplace',
                component: require('../dashboard/workplace').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/form',
            icon: 'form',
            name: 'form',
            routes: [
              {
                name: 'basic-form',
                path: '/form/basic-form',
                component: require('../form/basic-form').default,
                exact: true,
              },
              {
                name: 'step-form',
                path: '/form/step-form',
                component: require('../form/step-form').default,
                exact: true,
              },
              {
                name: 'advanced-form',
                path: '/form/advanced-form',
                component: require('../form/advanced-form').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/list/search',
                name: 'search-list',
                component: require('../list/search').default,
                routes: [
                  {
                    path: '/list/search',
                    redirect: '/list/search/articles',
                    exact: true,
                  },
                  {
                    name: 'articles',
                    path: '/list/search/articles',
                    component: require('../list/search/articles').default,
                    exact: true,
                  },
                  {
                    name: 'projects',
                    path: '/list/search/projects',
                    component: require('../list/search/projects').default,
                    exact: true,
                  },
                  {
                    name: 'applications',
                    path: '/list/search/applications',
                    component: require('../list/search/applications').default,
                    exact: true,
                  },
                  {
                    component: () =>
                      React.createElement(
                        require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                          .default,
                        { pagesPath: 'src/pages', hasRoutesInConfig: true },
                      ),
                  },
                ],
              },
              {
                name: 'table-list',
                path: '/list/table-list',
                component: require('../list/table-list').default,
                exact: true,
              },
              {
                name: 'basic-list',
                path: '/list/basic-list',
                component: require('../list/basic-list').default,
                exact: true,
              },
              {
                name: 'card-list',
                path: '/list/card-list',
                component: require('../list/card-list').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              {
                name: 'basic',
                path: '/profile/basic',
                component: require('../profile/basic').default,
                exact: true,
              },
              {
                name: 'advanced',
                path: '/profile/advanced',
                component: require('../profile/advanced').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'result',
            icon: 'check-circle-o',
            path: '/result',
            routes: [
              {
                name: 'success',
                path: '/result/success',
                component: require('../result/success').default,
                exact: true,
              },
              {
                name: 'fail',
                path: '/result/fail',
                component: require('../result/fail').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/exception',
            routes: [
              {
                name: '403',
                path: '/exception/403',
                component: require('../exception/403').default,
                exact: true,
              },
              {
                name: '404',
                path: '/exception/404',
                component: require('../exception/404').default,
                exact: true,
              },
              {
                name: '500',
                path: '/exception/500',
                component: require('../exception/500').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'account',
            icon: 'user',
            path: '/account',
            routes: [
              {
                name: 'center',
                path: '/account/center',
                component: require('../account/center').default,
                exact: true,
              },
              {
                name: 'settings',
                path: '/account/settings',
                component: require('../account/settings').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'editor',
            icon: 'highlight',
            path: '/editor',
            routes: [
              {
                name: 'flow',
                path: '/editor/flow',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'mind',
                path: '/editor/mind',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                name: 'koni',
                path: '/editor/koni',
                component: require('../editor/koni').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'viper',
            icon: 'table',
            path: '/viper',
            routes: [
              {
                name: 'list',
                path: '/viper/list',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'card',
                path: '/viper/card',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'partner',
            icon: 'user',
            path: '/partner',
            routes: [
              {
                name: 'add',
                path: '/partner/add',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'list',
                path: '/partner/list',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'class',
            icon: 'form',
            path: '/class',
            routes: [
              {
                name: 'classify',
                path: '/class/classify',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'support',
                path: '/class/support',
                component: require('../course/author').default,
                exact: true,
              },
              {
                name: 'all',
                path: '/class/all',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'before-verify',
                path: '/class/beforeVerify',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'product',
            icon: 'profile',
            path: '/product',
            routes: [
              {
                name: 'classify',
                path: '/product/classify',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'support',
                path: '/product/support',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                name: 'all',
                path: '/product/all',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'before-verify',
                path: '/product/beforeVerify',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'order',
            icon: 'highlight',
            path: '/order',
            routes: [
              {
                name: 'product',
                path: '/order/product',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'class',
                path: '/order/class',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'finance',
            icon: 'check-circle-o',
            path: '/finance',
            routes: [
              {
                name: 'dashboard',
                path: '/finance/dashboard',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'teacher',
                path: '/finance/teacher',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                name: 'partner',
                path: '/finance/partner',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'support',
                path: '/finance/support',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                name: 'withdraw',
                path: '/finance/withdraw',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'apply',
                path: '/finance/apply',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'swiper',
            icon: 'warning',
            path: '/swiper',
            routes: [
              {
                name: 'add',
                path: '/swiper/add',
                component: require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'list',
                path: '/swiper/list',
                component: require('../editor/mind').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/',
            redirect: '/dashboard/analysis',
            authority: ['admin', 'user'],
            exact: true,
          },
          {
            component: require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('D:/Study/实训/练习/pagelxt/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
