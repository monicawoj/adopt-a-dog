import React from 'react';
import {Link} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default class AddBlock extends React.Component {
  render() {
    return (
      <figure className="grid-figure grid-figure-add">
        <div className="grid-figure-add">
          <Link to={`/add/`}>
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="10x"
            />
          </Link>

        </div>
      </figure>
    )
  }
}
