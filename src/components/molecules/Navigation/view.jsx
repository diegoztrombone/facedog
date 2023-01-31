import { useAuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import { NavigationContainer, Container, S_Button } from './styled'
import WebhookIcon from '@mui/icons-material/Webhook'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

const Navigation = () => {
  const redirect = useNavigate()
  const { logout, user } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <NavigationContainer>
      <Container>
        <WebhookIcon sx={{ fontSize: 60 }} />
        <h2>React test</h2>
      </Container>
      <Container>
        <S_Button variant='contained' startIcon={<HomeIcon />} onClick={() => redirect('/')}>
          Home
        </S_Button>
        <S_Button variant='contained' startIcon={<PersonIcon />} onClick={() => redirect('/user')}>
          User
        </S_Button>
        <S_Button variant='contained' startIcon={<SettingsIcon />} onClick={() => redirect('/settings')}>
          Settings
        </S_Button>
      </Container>
      <Container>
        <p>{user.email}</p>
        <S_Button variant='outlined' startIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </S_Button>
      </Container>
    </NavigationContainer>
  )
}

export default Navigation
