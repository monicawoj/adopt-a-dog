import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackArrow } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const NoSearchResults = () => {
  return <div className="container">
    <Jumbotron>
      <h2>Sorry, no results match that search!</h2>
      <p>
        Try expanding your search by leaving a few of the search items blank. If you're looking locally, start with just location and breed. Still no luck? Explore all pets looking for a new home!
      </p>
      <p>
        <Link className='button btn-primary' to='/'>Explore all</Link>
        <Link className='button btn-secondary' to='/search/'>
          <FontAwesomeIcon icon={faBackArrow}></FontAwesomeIcon>
          &nbsp; Back to search
        </Link>
      </p>
    </Jumbotron>
  </div>;
}

export default NoSearchResults;
