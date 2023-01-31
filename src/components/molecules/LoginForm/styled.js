import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

export const StyledForm = styled('form')`
  width: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`

export const StyledButton = styled(LoadingButton)`
  width: 100%;
`

export const StyledInput = styled(TextField)`
  width: 100%;
`
