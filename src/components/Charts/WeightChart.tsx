import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Calorie Tracker',
    },
  },
};

const liveData = [
  {
    label: '20-05-2021',
    weight: 89.2,
  },
  {
    label: '30-06-2021',
    weight: 88.8,
  },

  {
    label: '5-06-2021',
    weight: 88,
  },
  {
    label: '17-06-2021',
    weight: 87.6,
  },

  {
    label: '20-06-2021',
    weight: 87.8,
  },
  {
    label: '25-06-2021',
    weight: 86.5,
  },
  {
    label: '29-06-2021',
    weight: 87.4,
  },
];

export const data = {
  labels: liveData.map((c) => c.label),
  datasets: [
    {
      label: 'Weight Tracker',
      data: liveData.map((c) => c.weight),
      backgroundColor: 'rgba(255, 149, 73, 1)',
      borderRadius: 10,
    },
  ],
};

function WeightChart() {
  return (
    <div>
      <Line
        className='h-[28rem] w-[45rem] rounded-lg border border-[#14C38E] lg:w-[40rem]'
        options={options}
        data={data}
      />
    </div>
  );
}

export default WeightChart;
