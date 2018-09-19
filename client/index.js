//import React, Redux, and router deps
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store, { history } from './store.js';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/Single';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import SearchForm from './components/SearchForm';
import FavoritesPage from './components/FavoritesPage';
import AboutPage from './components/AboutPage';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/view/:id" component={Single}/>
        <Route exact path="/search/active" component={SearchPage}/>
        <Route path="/search" component={SearchForm}/>
        <Route path="/favorites/" component={FavoritesPage}/>
        <Route path="/about/" component={AboutPage}/>
      </Route>
    </Router>
  </Provider>
);

//render takes two args render(jsx,where to render)
render(router, document.querySelector('#root'));
