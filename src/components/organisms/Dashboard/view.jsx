import Navigation from '@/components/molecules/Navigation'
import Sidebar from '@/components/molecules/Sidebar'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import { PageContainer } from '@/style'

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={3}>
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={7}>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Sidebar />
      </Grid>
    </Grid>
  )
}

export default Dashboard
