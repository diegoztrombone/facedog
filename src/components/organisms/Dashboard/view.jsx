import Navigation from '@/components/molecules/Navigation'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import { PageContainer } from '@/style'

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={2}>
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={10}>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Grid>
    </Grid>
  )
}

export default Dashboard
