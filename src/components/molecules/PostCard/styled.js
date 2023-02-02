import styled from '@emotion/styled'
import { Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

export const S_Card = styled(Card)`
  width: 100%;
  overflow: visible;
  
  .MuiCardHeader-title {
    font-size: 1.1rem;
    font-weight: 500;
    transition: text-decoration 1s ease;
    cursor: pointer;
  }

  .MuiCardHeader-title:hover {
    text-decoration: underline;
  }
  

`

export const S_CardMedia = styled(CardMedia)`


`
