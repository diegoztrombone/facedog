import styled from '@emotion/styled'
import { Box } from '@mui/system'
import InfiniteScroll from 'react-infinite-scroll-component'
import { palette } from '@/style'

import FakeScroll from '@yaireo/fakescroll/react.fakescroll.js'
import '@yaireo/fakescroll/fakescroll.css'

//https://jsfiddle.net/fr6b4b2d/

export const SidebarContainer = styled(FakeScroll)`
  height: 95vh;
  width: 15rem;
  position: fixed;
  top: 0;
  right: 2rem;
  margin: 1rem 0;

  .fakeScroll__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .fakeScroll__bar {
    transition: background-color 0.4s ease;
    background-color: ${props => (props.$scrollbar ? '#BCC0C490' : 'transparent')};
  }
`

export const UserCardContainer = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  justify-items: stretch;
  gap: 1rem;
`
