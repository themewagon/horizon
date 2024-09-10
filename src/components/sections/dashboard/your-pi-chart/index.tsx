import { Paper, Box, Stack, Typography, MenuItem, ButtonBase } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { useState, useRef } from 'react';
import customShadows from 'theme/shadows';
import PiChart from './PiChart';
import { useTheme } from '@mui/material';

interface PiChartDataProps {
  id: number | string;
  value: number;
  name: string;
  visible: boolean;
}

const PiChartData: PiChartDataProps[] = [
  { id: 1, value: 65, name: 'Your Files', visible: true },
  { id: 2, value: 35, name: 'System', visible: true },
];

const YourPiChart = () => {
  const [timeline, setTimeline] = useState('monthly');
  const [chartData, setChartData] = useState(PiChartData);
  const chartRef = useRef<EChartsReactCore>(null);
  const theme = useTheme();

  const handleSelectChange = (event: SelectChangeEvent) => {
    setTimeline(event.target.value);
  };

  const toggleVisibility = (name: string) => {
    const updatedData = chartData.map((item) =>
      item.name === name ? { ...item, visible: !item.visible } : item,
    );
    setChartData(updatedData);
    updateChart(updatedData);
  };

  const updateChart = (data: PiChartDataProps[]) => {
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;

    const visibleData = data
      .filter((item) => item.visible)
      .map((item) => ({
        value: item.value,
        name: item.name,
        itemStyle: {
          color: item.id === 1 ? theme.palette.primary.main : theme.palette.secondary.main,
        },
      }));

    echartsInstance.setOption({
      series: [
        {
          data: visibleData,
        },
      ],
    });
  };

  return (
    <Paper>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="body1" fontWeight={700}>
          Your Pie Chart
        </Typography>

        <FormControl
          variant="filled"
          sx={{
            minWidth: 110,
            '& .MuiInputBase-root': {
              '&:focus-within': {
                borderColor: 'transparent !important',
                boxShadow: 'none',
              },
            },
          }}
        >
          <Select id="select-filled" value={timeline} onChange={handleSelectChange}>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <PiChart chartRef={chartRef} />

      <Stack
        px={2}
        pt={3}
        pb={2.5}
        alignItems="center"
        borderRadius={4}
        boxShadow={customShadows[1]}
      >
        {chartData.map((item) => (
          <Stack
            component={ButtonBase}
            spacing={0.75}
            alignItems="flex-start"
            justifyContent="center"
            width="50%"
            onClick={() => toggleVisibility(item.name)}
            disableRipple
          >
            <Box
              height={10}
              width={10}
              borderRadius="50%"
              bgcolor={
                item.visible ? (item.id === 1 ? 'primary.main' : 'secondary.main') : 'neutral.light'
              }
            />
            <Box mt={-0.55}>
              <Typography variant="caption" color="text.disabled">
                {item.name}
              </Typography>
              <Typography variant="h6" textAlign="left">
                {item.value}%
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default YourPiChart;
