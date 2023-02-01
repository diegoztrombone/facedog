import Navigation from '@/components/molecules/Navigation'
import Sidebar from '@/components/molecules/Sidebar'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import { PageContainer, NavigationContainer } from './styled'

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <NavigationContainer item xs={12} md={3}>
        <Navigation />
      </NavigationContainer>
      <PageContainer container spacing={0} item xs={12} md={9}>
        <Grid item md={9}>
          <Outlet />
        </Grid>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      </PageContainer>
    </Grid>
  )
}

export default Dashboard
