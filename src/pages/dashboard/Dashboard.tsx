import { Grid } from '@mui/material';
import Analytics from 'components/sections/dashboard/analytics';
import BusinessDesign from 'components/sections/dashboard/business-design';
import Calendar from 'components/sections/dashboard/calendar';
import CardSecurity from 'components/sections/dashboard/card-security';
import ComplexTable from 'components/sections/dashboard/complex-table';
import History from 'components/sections/dashboard/history';
import PiChart from 'components/sections/dashboard/your-pi-chart';
import Revenue from 'components/sections/dashboard/revenue';
import Tasks from 'components/sections/dashboard/tasks';
import TeamMembers from 'components/sections/dashboard/team-members';
import TotalSpent from 'components/sections/dashboard/total-spent';

const Dashboard = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TotalSpent />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Revenue />
      </Grid>
      <Grid item xs={12} lg={4}>
        <BusinessDesign />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ComplexTable />
      </Grid>

      <Grid item xs={12} lg={4}>
        <CardSecurity />
      </Grid>
      <Grid item xs={12} lg={6}>
        <History />
      </Grid>
      <Grid item xs={12} lg={4}>
        <TeamMembers />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Tasks />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Calendar />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PiChart />
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
