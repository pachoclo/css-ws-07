import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const MobileHeader = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <ActionGroupLeft>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupLeft>
        <Logo />
        <ActionGroupRight>
          <Button>Subscribe</Button>
          <button>Already a subscriber?</button>
        </ActionGroupRight>
      </MainHeader>
    </header>
  )
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  display: block;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  height: 98px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 16px;
  }
`

const ActionGroupLeft = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
    padding-bottom: 4px;
  }
`

const ActionGroupRight = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
    gap: 4px;

    & button:nth-of-type(2) {
      text-decoration: underline;
      font-size: var(--color-gray-900);
      font-weight: 400;
      font-style: italic;
      font-size: 14px;
    }
  }
`

export default MobileHeader
