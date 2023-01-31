import { useAuthContext } from '@/context/AuthContext'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

const Home = () => {
  const { logout } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>Home</h1>
      <Button variant='contained' endIcon={<LogoutIcon />} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Home
