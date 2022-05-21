import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/break-points";

const Container = styled.div `
  width: 100%;
  height: 240px;
  margin-top: 20px;

  ${bp.desktop} {
    width: 45%;
    height: 460px;
    display: inline-flex;
    position: absolute;
    right: 40px;
  }
`

const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export { Container, Image }