import styled from "@emotion/styled";
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconCancel from '../../assets/icon-close-menu.svg'
import { breakPoints as bp } from "../../styles/break-points";
const Container = styled.div `
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

`

const Logo = styled.span `
  width: 72px;
  height: 52px;
  display: flex;
  background-image: url(${logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const IconMenu = styled.span `
  width: 28px;
  height: 28px;
  display: flex;
  justify-self: end;
  background-image:${props => props.openMenu ? `url(${iconCancel})` : `url(${iconMenu})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 1;

  ${bp.desktop} {
    display: none;
  }
`
export { Container, Logo, IconMenu }