import styled from '@emotion/styled'
import { Card } from '@mui/material'
import { palette } from '@/style'

export const S_Card = styled(Card)`
  width: 100%;
  overflow: visible;
  cursor: pointer;
  transition: background-color .5s ease;

  .MuiCardHeader-title {
    font-size: 1rem;
  }
  

  &:hover {
    background-color: ${palette.secondary};
  }
`
