/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import { MainContainer, BoxOpacity, Container, ItemMenu, IconArrowDown, ContainerSubItem,SubitItemMenu, Login, Button } from './styles'
import iconTodo from '../../assets/icon-todo.svg'
import iconCalendar from '../../assets/icon-calendar.svg'
import iconReminders from '../../assets/icon-reminders.svg'
import iconPlanning from '../../assets/icon-planning.svg'



const Menu = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  const [showCompany, setShowCompany] = useState(false);


 
  return (
    <MainContainer>
      <BoxOpacity />
      <Container>
        <ItemMenu>
          <h3>
            Features
            <IconArrowDown 
              onClick={() => setShowFeatures(!showFeatures)}
            />
          </h3>
          { showFeatures && 
            <ContainerSubItem>
              <SubitItemMenu
                css={css`
                  ::before{
                    content: url(${iconTodo});
                  } 
                `}
              >
                Todo List
              </SubitItemMenu>
              <SubitItemMenu
                css={css`
                  ::before{
                    content: url(${iconCalendar});
                  }
                `}
              >
                Todo Calendar
              </SubitItemMenu>
              <SubitItemMenu
                css={css`
                  ::before{
                    content: url(${iconReminders});
                  }
                `}
              >
                Reminders
              </SubitItemMenu>
              <SubitItemMenu
                css={css`
                  ::before{
                    content: url(${iconPlanning});
                  }
                `}
              >
                Planning
              </SubitItemMenu> 
            </ContainerSubItem>
          }
        </ItemMenu>
        <ItemMenu>
          <h3>
            Company
            <IconArrowDown
              onClick={() => setShowCompany(!showCompany)}
            />
          </h3>
          {showCompany  && 
            <ContainerSubItem>
              <SubitItemMenu>
                History
              </SubitItemMenu>
              <SubitItemMenu>
                Out Team
              </SubitItemMenu>
              <SubitItemMenu>
                Blog
              </SubitItemMenu>
            </ContainerSubItem>
          }
        </ItemMenu>
        <ItemMenu>
          <h3>Careers</h3>
        </ItemMenu>
        <ItemMenu>
          <h3>About</h3>
        </ItemMenu>
        <Login>
          <h3>Login</h3>
        </Login>
        <Button>
          Register
        </Button>
      </Container>
    </MainContainer>
  )
}

export default Menu