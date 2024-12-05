'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyListenersChartProps {
  data: {
    monthly_listeners: number;
    timestamp: string;
  }[];
}

export default function MonthlyListenersChart({ data }: MonthlyListenersChartProps) {
  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Monthly Listeners',
        data: data.map(entry => entry.monthly_listeners),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Listeners Trend',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => {
            return new Intl.NumberFormat('en-US', {
              notation: 'compact',
              compactDisplay: 'short',
            }).format(value as number);
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px] p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};