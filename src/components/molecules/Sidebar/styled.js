import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Card } from '@mui/material'
import { palette } from '@/style'


//https://jsfiddle.net/fr6b4b2d/


export const S_Card = styled(Card)`
  width: 100%;
  overflow: visible;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  cursor: pointer;
  transition: background-color .5s ease;

  .MuiCardHeader-title {
    font-size: 1rem;
  }
  

  &:hover {
    background-color: ${palette.secondary};
  }
`

export const SidebarContainer = styled(Box)`
  display: flex;
  padding: 1.5rem 0;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  position: fixed;
  width: 18vw;
  gap: 1rem;
  top: 0;
  overflow-y: ${props => props.ishidden};
  scrollbar-width: thin;
  scrollbar-color: #bfbfbf #ffffff;

  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 10px;
    border: 3px none #ffffff;
  }
`
