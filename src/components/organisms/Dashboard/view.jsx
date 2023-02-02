import Navigation from '@/components/molecules/Navigation'
import Sidebar from '@/components/molecules/Sidebar'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import { NavigationContainer } from './styled'

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <NavigationContainer item md={3}>
        <Navigation />
      </NavigationContainer>
      <Grid item  md={9}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Dashboard
