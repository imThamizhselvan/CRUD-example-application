import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: none;
  display: block;
  height: 100%;
  width: 100%;
`;

export const MainWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  margin-left: 10%;
`;

export const SideNavWrapper = styled.div`
  width: 25%;
  height: 100%;
  background-color: #1e395d;
  border-right: 1px solid black;
  padding: 1px;
  color: #fff;
  display: inline-block;
  float: left;
`;

export const Operations = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  padding-left: 0px;
`;

export const Items = styled.li`
  font-size: 28px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #294771;
    font-size: 29px;
  }
`;

export const BottomArea = styled.div`
  bottom: 5px;
  position: absolute;
  font-size: 28px;
  cursor: pointer;
  margin: 10px;
`;