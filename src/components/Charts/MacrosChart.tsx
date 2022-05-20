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
    protien: 80,
    carbs: 110,
    fats: 32,
    fiber: 27,
  },
  {
    label: 'Tuesday',
    caloriesBunrned: 689,
    caloriesConsumed: 1552,
    caloriesDifference: 763,
    protien: 80,
    carbs: 110,
    fats: 32,
    fiber: 27,
  },

  {
    label: 'Wednesday',
    caloriesBunrned: 728,
    caloriesConsumed: 1100,
    caloriesDifference: 300,
    protien: 80,
    carbs: 110,
    fats: 32,
    fiber: 27,
  },
  {
    label: 'Thursday',
    caloriesBunrned: 560,
    caloriesConsumed: 1452,
    caloriesDifference: 800,
    protien: 80,
    carbs: 110,
    fats: 32,
    fiber: 27,
  },

  {
    label: 'Friday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
    protien: 80,
    carbs: 110,
    fats: 32,
    fiber: 27,
  },
  {
    label: 'Saturday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
    protien: 80,
    carbs: 110,
    fats: 32,
    fiber: 27,
  },
  {
    label: 'Sunday',
    caloriesBunrned: 789,
    caloriesConsumed: 1452,
    caloriesDifference: 663,
    protien: 80,
    carbs: 120,
    fats: 32,
    fiber: 27,
  },
];

export const data = {
  labels: liveData.map((c) => c.label),
  datasets: [
    {
      label: 'Protein',
      data: liveData.map((c) => c.protien),
      backgroundColor: 'rgba(20, 195, 142, 1)',
      borderRadius: 10,
    },
    {
      label: 'Carbs',
      data: liveData.map((c) => c.carbs),
      backgroundColor: liveData.map((c) =>
        c.carbs < 120 ? 'rgba(255, 149, 73, 1)' : 'rgba(255, 73, 73, 1)'
      ),
      borderRadius: 10,
    },
    {
      label: 'Fats',
      data: liveData.map((c) => c.fats),
      backgroundColor: 'rgba(255, 237, 73, 1)',
      borderRadius: 10,
    },
    {
      label: 'Fiber',
      data: liveData.map((c) => c.fiber),
      backgroundColor: 'rgba(88, 73, 255, 0.74)',
      borderRadius: 10,
    },
  ],
};

function MacrosChart() {
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

export default MacrosChart;
