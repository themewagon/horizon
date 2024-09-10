import { SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts';

interface PiChartProps {
  sx?: SxProps;
  chartRef: React.RefObject<EChartsReactCore>;
}

const PiChart = ({ chartRef, ...rest }: PiChartProps) => {
  const theme = useTheme();

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%',
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 65, name: 'Your Files', itemStyle: { color: theme.palette.primary.main } },
          { value: 35, name: 'System', itemStyle: { color: theme.palette.secondary.main } },
        ],
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          show: false,
        },
      },
    ],
  };

  return <ReactEchart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default PiChart;
