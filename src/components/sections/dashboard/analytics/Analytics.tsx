import { Grid } from '@mui/material';
import Earnings from './Earnings';
import Spend from './Spend';
import Tasks from './Tasks';
import Projects from './Projects';
import Sales from './Sales';
import Balance from './Balance';

const Analytics = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Earnings />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Spend />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Sales />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Balance />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Tasks />
      </Grid>

      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Projects />
      </Grid>
    </Grid>
  );
};

export default Analytics;
