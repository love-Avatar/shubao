import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'global', ...(require('C:/Users/l/Desktop/shubao/src/models/global.js').default) });
app.model({ namespace: 'login', ...(require('C:/Users/l/Desktop/shubao/src/models/login.js').default) });
app.model({ namespace: 'setting', ...(require('C:/Users/l/Desktop/shubao/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('C:/Users/l/Desktop/shubao/src/models/user.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/user/login/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/user/register/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/dashboard/analysis/model.jsx').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/dashboard/monitor/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/dashboard/workplace/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/form/basic-form/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/form/step-form/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/form/advanced-form/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/list/search/articles/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/list/search/projects/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/list/search/applications/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/list/table-list/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/list/basic-list/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/list/card-list/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/profile/basic/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/profile/advanced/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/account/center/model.js').default) });
app.model({ namespace: 'model', ...(require('C:/Users/l/Desktop/shubao/src/pages/account/settings/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
