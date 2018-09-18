import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlockm, HelpBlock } from 'react-bootstrap';

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
    const {breed, size, sex, location} = this.state;
    this.props.requestFindDogs(breed,size,sex,location);
  }

  render() {
    const sizes = ['','S','M','L','XL'];
    const sexes = ['','M','F'];
    // const ages = ['','Baby','Young','Adult','Senior'];

    const breedItems = this.props.breeds.map((item) => <option value={item} key={item}>{item}</option>);

    const sizeItems = sizes.map((item) => <option value={item} key={item}>{item}</option>);

    const sexItems = sexes.map((item) => <option value={item} key={item}>{item}</option>);

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="col">
          <FormGroup
            className=""
            controlId="location"
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
            <FormGroup controlId="formSelect">
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
            <FormGroup controlId="formSelect">
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
            <FormGroup controlId="formSelect">
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
            {/* <FormGroup controlId="formSelect">
              <ControlLabel>Age</ControlLabel>
              <FormControl
                componentClass="select"
                value={this.state.age}
                placeholder="Select age"
                onChange={e => this.handleChange(e,'age')}
                >
                {ageItems}
              </FormControl>
            </FormGroup> */}
          </div>
            <div className="col">
              <div className="button-wrap">
                <button
                  className='btn-primary button-show-more'
                  type="submit">Search</button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}
