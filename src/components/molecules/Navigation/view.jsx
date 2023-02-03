import { useAuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Container, S_Button } from './styled'
import LogoutIcon from '@mui/icons-material/Logout'
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { useQueryClient } from 'react-query'

const Navigation = () => {
  const redirect = useNavigate()
  const { logout, user } = useAuthContext()
  const queryClient = useQueryClient()

  const handleRefreshQueries = () => {
    queryClient.refetchQueries()
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <Container>
        <PetsIcon sx={{ fontSize: 60 }} />
        <h2>Facedog</h2>
      </Container>
      <Container>
        <S_Button variant='contained' startIcon={<HomeIcon />} onClick={() => redirect('/')}>
          <p>Home</p>
        </S_Button>
        <S_Button variant='contained' startIcon={<PersonIcon />} onClick={() => redirect('/user')}>
          <p>Users</p>
        </S_Button>
        <S_Button variant='contained' startIcon={<SettingsIcon />} onClick={() => redirect('/settings')}>
          <p>Settings</p>
        </S_Button>
      </Container>
      <Container>
        <p>{user.email}</p>
        <S_Button variant='outlined' startIcon={<CloudSyncIcon />} onClick={handleRefreshQueries}>
          <p>Sync</p>
        </S_Button>
        <S_Button variant='outlined' startIcon={<LogoutIcon />} onClick={handleLogout}>
          <p>Logout</p>
        </S_Button>
      </Container>
    </>
  )
}

export default Navigation
