import React, {useState } from 'react'
import { Container, Logo, IconMenu } from '../NavBar/styles'
import Modal from '../Modal'
import Menu from '../Menu/index'

const NavBar = ({screenWidth}) => {
  const [openMenu, setOpenMenu] = useState('');
  
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  
  return(
    <Container>
      <Logo />
      <IconMenu
        onClick={handleClick}
        openMenu={openMenu}
      />
      {(openMenu || screenWidth > 1024) &&
        <Modal screenWidth={screenWidth}>
          <Menu />
        </Modal>

      }
    </Container>
  )
}

export default NavBar