import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default class Main extends React.Component {
  render() {
    return <div>
      <Header />
      <h1>
        <Link to='/'>
          aDoptaDog
        </Link>
      </h1>
      {React.cloneElement(this.props.children, this.props)}
      <Footer />
    </div>
  }
}
