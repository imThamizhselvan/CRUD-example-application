import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/homeAction';
import { Wrapper,  BigText, Label, Input, Button, InputWrapper } from './styles';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      mailId: '',
      password: '',
    }
  }
  
  login = () => {
    this.props.simpleAction(this.state.mailId, this.state.password);
  }

  render() {
    return (
      <Wrapper>
        <BigText> Welcome </BigText>
        <p> Sign in to Continue </p>
        <InputWrapper> 
          <Label> 
            Username <Input type="text" value={this.state.mailId} onChange={evt => this.setState({mailId: evt.target.value})} />
          </Label>
          <Label> 
            Password <Input type="password" value={this.state.password} onChange={evt => this.setState({password: evt.target.value})} />
          </Label>
          <Button onClick={this.login}>Login</Button>
        </InputWrapper>
        {/* <button onClick={this.getData}>Get Data action</button> */}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: (mailId, password) => dispatch(simpleAction(mailId, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
