import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHorse } from '../../actions/homeAction';

class ListHorses extends Component {
  constructor() {
    super();
    this.state = {
      horseNumber: '',
    }
  }

  componentDidMount() {
    this.props.getHorse();
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getHorse: () => dispatch(getHorse())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListHorses);
