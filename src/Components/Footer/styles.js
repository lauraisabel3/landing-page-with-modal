import styled from "@emotion/styled";
import iconDatabiz from '../../assets/icon-databiz.svg'
import iconAudiophile from '../../assets/icon-audiophile.svg'
import iconMeet from '../../assets/icon-meet.svg'
import iconMaker from '../../assets/icons-maker.svg'
import { breakPoints as bp } from "../../styles/break-points";

const Container = styled.div `
  width: 100%;
  height: 40px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  align-items: center;

  ${bp.desktop} {
    width: 45%;
    position: absolute;
    left: 40px;
  }
`
const Icons = styled.span `
  width: 80px;
  height: 40px;
  display: flex;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`
const IconDatabiz = styled(Icons) `
  background-image: url(${iconDatabiz})
`

const IconAudiophile = styled(Icons) `
  width: 60px;
  height: 32px;
  background-image: url(${iconAudiophile});
`

const IconMeet = styled(Icons) `
  background-image: url(${iconMeet});
`

const IconMaker = styled(Icons) `
  background-image: url(${iconMaker})
`

export { Container, IconDatabiz, IconAudiophile, IconMeet, IconMaker}