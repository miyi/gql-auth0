import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router as BrowserRouter,
	Route,
} from 'react-router-dom';
import history from 'history';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import 'tachyons';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const netWorkInterface = createNetworkInterface({
	uri: 'https://api.graph.cool/simple/v1/cj7b4tiyi139u01948adf4i1e',
})

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    if (localStorage.getItem('auth0IdToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`
    }
    next()
  },
}]);

const client = new ApolloClient({ networkInterface });

ReactDOM.render((
  <ApolloProvider client={client}>
		<Router history={history}>
			<App />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
