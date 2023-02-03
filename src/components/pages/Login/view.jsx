import StyledGrid from './syled'
import LoginForm from '@/components/molecules/LoginForm'
import PetsIcon from '@mui/icons-material/Pets';

const Login = () => {
  return (
    <StyledGrid>
      <PetsIcon sx={{ fontSize: 60 }} />
      <h1>Facedog</h1>
      <LoginForm />
    </StyledGrid>
  )
}

export default Login
