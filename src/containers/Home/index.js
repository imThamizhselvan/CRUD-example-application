import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/homeAction';
import { Wrapper } from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mailId: '',
      password: '',
    }
  }
  simpleAction = () => {
    this.props.simpleAction(this.state.mailId, this.state.password);
  }
  render() {
    return (
      <Wrapper>
        <input type="text" value={this.state.mailId} onChange={evt => this.setState({mailId: evt.target.value})} />
        <input type="password" value={this.state.password} onChange={evt => this.setState({password: evt.target.value})} />
        <button onClick={this.simpleAction}>Test redux action</button>
        <p> {this.props.homeReducer.data.title} </p>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: (mailId, password) => dispatch(simpleAction(mailId, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
