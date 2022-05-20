import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    label: 'Monday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
  },
  {
    label: 'Tuesday',
    caloriesBunrned: 689,
    caloriesConsumed: 1552,
    caloriesDifference: 763,
  },

  {
    label: 'Wednesday',
    caloriesBunrned: 728,
    caloriesConsumed: 1100,
    caloriesDifference: 300,
  },
  {
    label: 'Thursday',
    caloriesBunrned: 560,
    caloriesConsumed: 1452,
    caloriesDifference: 800,
  },

  {
    label: 'Friday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
  },
  {
    label: 'Saturday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
  },
  {
    label: 'Sunday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
  },
];

export const data = {
  labels: liveData.map((c) => c.label),
  datasets: [
    {
      label: 'Calories Burned',
      data: liveData.map((c) => c.caloriesBunrned),
      backgroundColor: 'rgba(255, 149, 73, 1)',
      borderRadius: 10,
    },
    {
      label: 'Calories Consumed',
      data: liveData.map((c) => c.caloriesConsumed),
      backgroundColor: 'rgba(20, 195, 142, 1)',
      borderRadius: 10,
    },
  ],
};

function CaloriesBurnedChart() {
  return (
    <div>
      <Bar
        className='h-[28rem] w-[45rem] rounded-lg border border-[#14C38E] lg:w-[40rem]'
        options={options}
        data={data}
      />
    </div>
  );
}

export default CaloriesBurnedChart;
