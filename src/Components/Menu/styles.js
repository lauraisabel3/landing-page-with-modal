import styled from "@emotion/styled";
import { IoIosArrowDown } from 'react-icons/io'
import { breakPoints as bp } from "../../styles/break-points";

const MainContainer = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  ${bp.desktop} {
    width: 90%;
    height: auto;
    display: flex;
    top: 0;
    left: 120px;
  }
`

const BoxOpacity = styled.div `
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0.5;

  ${bp.desktop} {
    display: none;
  }

`

const Container = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  background-color: var(--white);

  ${bp.desktop} {
    width: 100%;
    height: 50px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
  }
`

const ItemMenu = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: var(--grey);

  :hover {
    color: black;
  }
  h3 {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
  }

  ${bp.desktop} {
    margin: 0;
  }
`

const IconArrowDown = styled(IoIosArrowDown) `
  margin-left: 4px;
  cursor: pointer;
`

const ContainerSubItem = styled.div `
  width: auto;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;


  ${bp.desktop} {
    width: auto;
    height: auto;
    position: absolute;
    padding: 20px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    box-shadow: 2px 2px 20px 4px hsl(0, 0%, 88%);
    border-radius: 12px;
  }
`

const SubitItemMenu = styled.span `
  width: auto;
  height: auto;
  margin: 12px 0 12px 20px;
  font-size: 1.6rem;

  ::before{
    margin-right: 8px;
    position: center;
  }

  ${bp.desktop} {
    margin: 12px 0;
  }
`

const Login = styled.div `
  width: 100%;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;

  h3 {
    text-align:center;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--grey);
  }

  ${bp.desktop} {
    height: auto;
    margin-top: 0;
  }
`

const Button = styled.button `
  width:100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid var(--grey);
  border-radius: 12px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;

  :hover {
    transform: scale(1.04);
  }

  
`

export { MainContainer, BoxOpacity, Container, ItemMenu, IconArrowDown, ContainerSubItem, SubitItemMenu, Login, Button }