import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import NewPost from './components/NewPost';

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, { history } from './store.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="/view/:postId" component={Single}/>
        <Route path="/add/" component={NewPost}/>
      </Route>
    </Router>
  </Provider>
)

//render takes two args render(jsx,where to render)
render(router, document.querySelector('#root'));
