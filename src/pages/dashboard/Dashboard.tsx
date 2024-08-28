import { Grid } from '@mui/material';
import Analytics from 'components/sections/dashboard/analytics';

const Dashboard = () => {
  return (
    <Grid container spacing={2.5} sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
      <Grid item xs={12}>
        Line Chart
      </Grid>
      <Grid item xs={12}>
        Stacked Bar Chart
      </Grid>
      <Grid item xs={12}>
        Check Table
      </Grid>
      <Grid item xs={12}>
        Daily Traffic
      </Grid>
      <Grid item xs={12}>
        Pie Chart
      </Grid>
      <Grid item xs={12}>
        Complex Table
      </Grid>
      <Grid item xs={12}>
        Tasks
      </Grid>
      <Grid item xs={12}>
        Calendar
      </Grid>
      <Grid item xs={12}>
        Business Design
      </Grid>
      <Grid item xs={12}>
        Team Members
      </Grid>
      <Grid item xs={12}>
        Control Card Security
      </Grid>
      <Grid item xs={12}>
        Starbucks
      </Grid>
    </Grid>
  );
};

export default Dashboard;
