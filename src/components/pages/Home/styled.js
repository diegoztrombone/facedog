import styled from '@emotion/styled'
import { Container, Grid } from '@mui/material'

export const CardContainer = styled(Container)`
  width: 90%;
  gap: 5rem;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const HomeContainer = styled(Grid)`
  overflow-y: scroll;
  height: 100vh;
`
