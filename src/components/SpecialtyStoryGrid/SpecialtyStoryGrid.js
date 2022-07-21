import React from 'react'
import styled from 'styled-components/macro'

import { MARKET_DATA, SPORTS_STORIES } from '../../data'

import MarketCard from '../MarketCard'
import SectionTitle from '../SectionTitle'
import MiniStory from '../MiniStory'
import { QUERIES } from '../../constants'

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>

      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 0;

    & > :first-of-type {
      padding-right: 16px;
      border-right: 1px solid var(--color-gray-300);
    }

    & > :last-of-type {
      padding-left: 16px;
    }
  }
`

const MarketsSection = styled.section``

const MarketCards = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`

const SportsSection = styled.section`
  display: grid;
  overflow: auto;
`

const SportsStories = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    & > a {
      min-width: 220px;
    }
  }
`

export default SpecialtyStoryGrid
