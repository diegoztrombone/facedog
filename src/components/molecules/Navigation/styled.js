import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { palette } from '@/style'
import { Button } from '@mui/material'

export const NavigationContainer = styled(Box)`
  background-color: ${palette.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
  height: 100vh;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${palette.primary};
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
