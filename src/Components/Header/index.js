import React from "react";
import { Container, Image} from '../Header/styles'
import imageHeaderMobile from '../../assets/image-hero-mobile.png'
import imageHeaderDesktop from '../../assets/image-hero-desktop.png'

const Header = ({screenWidth}) => {
  return (
    <Container>
      { screenWidth < 1024 ?
        <Image
          src={imageHeaderMobile}
        />
        :
        <Image 
          src={imageHeaderDesktop}
        />
      }
    </Container>
  )
}

export default Header