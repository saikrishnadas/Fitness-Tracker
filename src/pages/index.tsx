import * as React from 'react';
import Metrics from '@/components/Metrics/Metrics';
import Profile from '@/components/Profile/Profile';
import Add from '@/components/Add/Add';
import CaloriesBurnedChart from '@/components/Charts/CaloriesBurnedConsumedChart';
import CaloriesDifferenceChart from '@/components/Charts/CaloriesDifferenceChart';
import WeightChart from '@/components/Charts/WeightChart';
import MacrosChart from '../components/Charts/MacrosChart';
import { useRecoilState } from 'recoil';
import { chartState } from '../Atoms/chartAtom';
import axios from 'axios';
import { useEffect } from 'react';

export default function HomePage() {
  const [chart, setChart] = useRecoilState(chartState);
  const [datas,setDatas] = React.useState([])

  const getData = async () =>{
    await axios.get("/api/addFood").then((resp) => {
      setDatas(resp.data)
      console.log(resp.data);
    })
  } 
  
  useEffect(() => {
    getData();
  },[])

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='h-[8rem] w-[200vw] bg-[rgb(20,195,142)] lg:h-[100vh] lg:w-[5rem]'></div>
      <div className='flex w-[200vw] flex-col items-center lg:w-fit lg:items-start'>
        <span className='flex flex-col items-center lg:m-5 lg:items-start'>
          <h1 className='mt-5 text-6xl font-bold lg:mt-0 lg:text-3xl'>
            Hello Sai! 👋
          </h1>
          <p className='mt-5 text-3xl lg:mt-1 lg:text-lg'>
            Welcome, Let’s do some workout today
          </p>
        </span>
        <div className='flex flex-col items-center lg:flex-row'>
          {chart === 'calories-burned' && <CaloriesBurnedChart />}
          {chart === 'calories-consumed' && <CaloriesBurnedChart />}
          {chart === 'calories-difference' && <CaloriesDifferenceChart />}
          {chart === 'weight' && <WeightChart />}
          {chart === 'macros' && <MacrosChart />}
          <Metrics datas={datas}/>
        </div>
        <div className='flex flex-col items-center lg:flex-row'>
          <div
            onClick={() => setChart('macros')}
            className='mt-10 flex h-[4rem] w-[15rem] cursor-pointer items-center justify-center rounded-lg bg-[#FF9549] text-2xl font-bold lg:ml-5 lg:h-[3rem] lg:w-[12rem] lg:text-base'
          >
            <p>Macros Consumed</p>
          </div>
          <Add />
          {/* <button onClick={getData}>Test</button> */}
        </div>
      </div>
      <Profile />
    </div>
  );
}
