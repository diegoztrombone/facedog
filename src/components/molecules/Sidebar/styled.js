import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Button } from '@mui/material'

//https://jsfiddle.net/fr6b4b2d/

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
  overflow-y: ${props => (props.ishidden)};
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

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  gap: 1rem;
`

export const S_Button = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    margin-left: 0.5rem;
  }
`
