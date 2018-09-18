import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    //breed:
    console.log(this.props.breeds);
    const breedItems = this.props.breeds.map((item) => <option value={item} key={item}>{item}</option>);

    //size: S=small, M=medium, L=large, XL=extra-large
    //sex: M=male, F=female
    //location: the ZIP/postal code or city and state where the search should begin
    //age: age of the animal (Baby, Young, Adult, Senior)
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={e => this.handleChange(e)}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Breed</ControlLabel>
          <FormControl componentClass="select" placeholder="Select breed">
            {breedItems}
          </FormControl>
        </FormGroup>
      </form>
    );
  }
}
