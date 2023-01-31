import Navigation from '@/components/molecules/Navigation'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs='12' md='2'>
        <Navigation />
      </Grid>
      <Grid item xs='12' md='10'>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Dashboard
