import styled from 'styled-components'
import { Box } from '@mui/system'

//https://jsfiddle.net/fr6b4b2d/

export const SidebarContainer = styled('div')`
  padding: 1rem 0;
  height: 95vh;
  width: 18%;
  position: fixed;
  top: 0;
  right: 20px;
  overflow-y: ${props => (props.scroll ? 'auto' : 'hidden')};
  scrollbar-width: thin;
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
  scrollbar-gutter: stable;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`

export const UserCardContainer = styled(Box)`
  padding: 1.5rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  justify-items: stretch;
  gap: 1rem;
`
