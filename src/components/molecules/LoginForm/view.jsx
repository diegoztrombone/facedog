import { StyledButton, StyledForm, StyledInput } from './styled'
import GoogleIcon from '@mui/icons-material/Google'
import LoginIcon from '@mui/icons-material/Login'
import { useCallback, useState } from 'react'
import { useAuthContext } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'

const LogginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const { login, error, user, loading, loadingGoogle } = useAuthContext()

  const handleLoginWithGoogle = async () => {}

  const handleLogin = event => {
    event.preventDefault()
    login(credentials)
  }

  const handleChange = useCallback(
    event => {
      setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }))
    },
    [credentials]
  )

  if (user) {
    return <Navigate to={'/'} />
  }

  return (
    <StyledForm onSubmit={handleLogin}>
      <StyledInput
        name='email'
        type='email'
        label='Email'
        error={error}
        helperText={error && "Something went wrong"}
        variant='outlined'
        value={credentials.email}
        onChange={handleChange}
      />
      <StyledInput
        name='password'
        type='password'
        label='Password'
        variant='outlined'
        value={credentials.password}
        onChange={handleChange}
      />
      <StyledButton loading={loading} type='submit' variant='contained' startIcon={<LoginIcon />} onClick={handleLogin}>
        Login
      </StyledButton>
      <StyledButton loading={loadingGoogle} variant='contained' startIcon={<GoogleIcon />} onClick={handleLoginWithGoogle}>
        Login with Google
      </StyledButton>
    </StyledForm>
  )
}

export default LogginForm
