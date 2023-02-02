import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { palette } from '@/style'

export const NavigationContainer = styled(Grid)`
  background-color: ${palette.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
  height: 100vh;

  box-shadow: 5px 5px 10px #ddd9d7, -5px -5px 10px #ffffff;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${palette.primary};
  }
`



