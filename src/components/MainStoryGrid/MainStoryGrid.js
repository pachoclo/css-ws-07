import React from 'react'
import styled from 'styled-components/macro'

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data'

import SectionTitle from '../SectionTitle'
import MainStory from '../MainStory'
import SecondaryStory from '../SecondaryStory'
import OpinionStory from '../OpinionStory'
import Advertisement from '../Advertisement'
import { QUERIES } from '../../constants'

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px 0;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 400px 300px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:first-of-type) {
    padding-top: 16px;
  }

  & > :not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const SecondaryStoryList = styled(StoryList)`
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    padding: 0;

    & > :not(:last-of-type),
    & > :not(:first-of-type) {
      border-bottom: none;
      padding: 0;
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`

export default MainStoryGrid
