import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteHorse } from '../../actions/homeAction';
import { Label, Input, Button, InputWrapper } from '../Login/styles';

class DeleteHorses extends Component {
  constructor() {
    super();
    this.state = {
      horseId: '',
    }
  }

  deleteHorse = () => {
    this.props.deleteHorse(this.state.horseId);
  }


  render() {
    return (
      <InputWrapper> 
        <Label> 
          Horse Id <Input type="text" value={this.state.horseId} onChange={evt => this.setState({horseId: evt.target.value})} />
        </Label>
        <Button onClick={this.deleteHorse}>Delete</Button>
      </InputWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  deleteHorse: (data) => dispatch(deleteHorse(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteHorses);

