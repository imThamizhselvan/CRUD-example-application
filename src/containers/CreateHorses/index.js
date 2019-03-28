import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHorse } from '../../actions/homeAction';
import { Label, Input, Button, InputWrapper } from '../Login/styles';

class CreateHorses extends Component {
  constructor() {
    super();
    this.state = {
      horseNumber: '',
      horseName: '',
      color: '',
      type: '',
      gender: '',
    }
  }

  create = () => {
    this.props.createHorse(this.state);
  }

  render() {
    return (
      <InputWrapper> 
        <Label> 
          Horse Number <Input type="text" value={this.state.horseNumber} onChange={evt => this.setState({horseNumber: evt.target.value})} />
        </Label>
        <Label> 
          Horse Name <Input type="text" value={this.state.horseName} onChange={evt => this.setState({horseName: evt.target.value})} />
        </Label>
        <Label> 
          Color <Input type="text" value={this.state.color} onChange={evt => this.setState({color: evt.target.value})} />
        </Label>
        <Label> 
          Type <Input type="text" value={this.state.type} onChange={evt => this.setState({type: evt.target.value})} />
        </Label>
        <Label> 
          Gender <Input type="text" value={this.state.gender} onChange={evt => this.setState({gender: evt.target.value})} />
        </Label>
        <Button onClick={this.create}>Create</Button>
      </InputWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  createHorse: (data) => dispatch(createHorse(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateHorses);

