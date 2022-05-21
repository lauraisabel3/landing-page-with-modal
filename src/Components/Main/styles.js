import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/break-points";

const Container = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  ${bp.desktop} {
    width: 45%;
    height: 240px;
    margin-top: 140px;
    padding-left: 20px;
    display: inline-flex;
    align-items: start;
  }
`

const Title = styled.h1 `
  font-size: 2rem;
  text-align: center;
  color: var(--black);

  ${bp.desktop} {
    text-align: left;
    font-size: 5rem;
  }
`

const Text = styled.p `
  margin-top: 20px;
  font-size: 1.4rem;
  text-align: center;
  line-height: 2.5rem;
  color: var(--grey);

  ${bp.desktop} {
    width: 80%;
    text-align: left;
  }
`

const Button = styled.button `
  width: 120px;
  height: 60px;
  margin-top: 20px;
  font-family: inherit;
  font-size: 1.4rem;
  background-color: var(--black);
  border: none;
  border-radius: 12px;
  color: var(--white);
  cursor: pointer;
`

export { Container, Title, Text, Button }