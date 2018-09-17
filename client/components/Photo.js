import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {
  render() {
    const {dog, i, comments} = this.props;
    const id = dog.id['$t'];
    const dog_photo = dog.media.photos ? dog.media.photos.photo.filter(photo => photo['@size'] == "x")[0]['$t'] : require('../assets/images/placeholder-paw.png');

    return (
      <figure className='grid-figure'>
        <div className='grip-photo-wrap'>
          <Link to={`/view/${id}`}>
            <img src={dog_photo} alt={dog.name['$t']} className='grid-photo'/>
          </Link>
          <CSSTransitionGroup transitionName="favorite"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={dog.favorite} className="favorite-heart">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{dog.name['$t']}</p>
          <p>{dog.breeds.breed['$t']}</p>
          <div className="control-buttons">
            {!dog.favorite ? <button onClick={e => this.props.handleFavoriteClick(dog,i)}  className="control-button favorite">&hearts;</button> : null}
            <Link className="control-button button" to={`/view/${id}`}>
              <span>
                <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                More info
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}
