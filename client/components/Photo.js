import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {
  render() {
    const {dog, i, comments} = this.props;
    const id = dog.id['$t'];
    const dog_photo = dog.media.photos ? dog.media.photos.photo.filter(photo => photo['@size'] == "x")[0]['$t'] : '../assets/images/placeholder-paw.png';

    return (
      <figure className='grid-figure'>
        <div className='grip-photo-wrap'>
          <Link to={`/view/${id}`}>
            <img src={dog_photo} alt={dog.name['$t']} className='grid-photo'/>
          </Link>
          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={dog.likes} className="likes-heart">
              {/* {dog.likes ? dog.likes : 0 } */}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{dog.name['$t']}</p>
          <p>{dog.breeds.breed['$t']}</p>
          <div className="control-buttons">
            <button onClick={e => this.props.increment(id)}  className="likes">&hearts; {dog.likes ? dog.likes : 0 }</button>
            <button onClick={e => this.props.addToFavorites(dog)}  className="likes btn-danger">&hearts; </button>
            <Link className="button" to={`/view/${id}`}>
              <span className="comment-count">
                <span className="speech-bubble"> </span>
              {comments[id] ? comments[id].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}
