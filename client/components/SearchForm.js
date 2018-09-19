import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlockm, HelpBlock } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export default class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      breed: '',
      size: '',
      sex: '',
      location: '',
      age: ''
    };
  }

  componentWillMount() {
    this.props.requestBreedList();
  }

  getLocationValidationState() {
    const zip = this.state.location;
    const onlyNums = zip.match(/^\d+$/);
    const requiredLength = (zip.length == 5);
    if (onlyNums && requiredLength) {
      return 'success';
    }
    else if (onlyNums) return 'warning';
    else if (zip.length > 0) return 'error';
    return null;
  }

  handleChange = (e,type) => {
    console.log(type);
    let stateObj = {};
    stateObj[type] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {breed, size, sex, location, age} = this.state;
    //console.log(breed, size, sex, location);
    this.props.requestFindDogs(breed, size, sex, location, age);
    this.props.history.push('/search/active');
  }

  render() {
    const sizes = ['','S','M','L','XL'];
    const sexes = ['','M','F'];
    const ages = ['','Baby', 'Young', 'Adult', 'Senior'];

    const createOptions = (arr) => {
      return arr.map((item) => <option value={item} key={item}>{item}</option>);
    }

    const breedItems = createOptions(this.props.breeds);
    const sizeItems = createOptions(sizes);
    const sexItems = createOptions(sexes);
    const ageItems = createOptions(ages);

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="col">
            <FormGroup
              controlId="locationInput"
              validationState={this.getLocationValidationState()}
            >
              <ControlLabel>Location</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter zip code"
                onChange={e => this.handleChange(e,'location')}
              />
              <FormControl.Feedback />
              <HelpBlock>Want to search locally? Enter a US ZIP/postal code (e.g. 22204)</HelpBlock>
            </FormGroup>
            <FormGroup controlId="breedSelect">
              <ControlLabel>Breed</ControlLabel>
              <FormControl
                componentClass="select"
                value={this.state.breed}
                placeholder="Select breed"
                onChange={e => this.handleChange(e,'breed')}
                >
                {breedItems}
              </FormControl>
            </FormGroup>
            <FormGroup controlId="sizeSelect">
              <ControlLabel>Size</ControlLabel>
              <FormControl
                componentClass="select"
                value={this.state.size}
                placeholder="Select size"
                onChange={e => this.handleChange(e,'size')}
                >
                {sizeItems}
              </FormControl>
            </FormGroup>
            <FormGroup controlId="sexSelect">
              <ControlLabel>Sex</ControlLabel>
              <FormControl
                componentClass="select"
                value={this.state.sex}
                placeholder="Select sex"
                onChange={e => this.handleChange(e,'sex')}
                >
                {sexItems}
              </FormControl>
            </FormGroup>
            <FormGroup controlId="ageSelect">
              <ControlLabel>Age</ControlLabel>
              <FormControl
                componentClass="select"
                value={this.state.age}
                placeholder="Select age"
                onChange={e => this.handleChange(e,'age')}
                >
                {ageItems}
              </FormControl>
            </FormGroup>
          </div>
            <div className="col">
              <div className="button-wrap">
                <button
                  className='btn-primary button-show-more'
                  type="submit">
                  SEARCH &nbsp;
                  <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
                </button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}
