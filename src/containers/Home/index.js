import React, { Component } from 'react';
import { BigText } from '../Login/styles';
import CreateHorses from '../CreateHorses';
import DeleteHorses from '../DeleteHorses';
import ListHorses from '../ListHorses';
import { Wrapper, Operations, Items, SideNavWrapper,  MainWrapper, BottomArea } from './styles';
import history from '../App/history';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      addHorses: false,
      listHorses: false,
      deleteHorses: false
    }
  }

  handleLogout = () => {
    localStorage.setItem("access_token", "");
    history.push('/');
  }

  render() {
    return (
      <Wrapper>
        <SideNavWrapper>
          <BigText>
            The Horses Hub
          </BigText> 
          <Operations>
            <Items onClick={() => this.setState({addHorses: true, listHorses: false, deleteHorses: false})}>
              Add new Horses
            </Items>
            <Items onClick={() => this.setState({listHorses: true, addHorses: false, deleteHorses: false})}>
              List all Horses
            </Items>
            <Items onClick={() => this.setState({deleteHorses: true, listHorses: false, addHorses: false})}>
              Delete Horses
            </Items>
          </Operations>
          <BottomArea onClick={this.handleLogout}>
                Logout
          </BottomArea>
        </SideNavWrapper>
        <MainWrapper>
          {this.state.addHorses && <CreateHorses /> }
          {this.state.deleteHorses && <DeleteHorses />}
          {this.state.listHorses && <ListHorses /> }
        </MainWrapper>
      </Wrapper>

    );
  }
}

