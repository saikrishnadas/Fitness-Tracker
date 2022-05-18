import * as React from 'react';

export default function HomePage() {
  return (
    <div className='flex'>
      <div className='h-[100vh] w-[5rem] bg-[rgb(20,195,142)]'></div>
      <div className='m-5 flex flex-col'>
        <div className=''>
          <h1 className='text-3xl font-bold'>Hello Sai! 👋</h1>
          <p>Welcome, Let’s do some workout today</p>
        </div>
        <div className='mt-10 flex'>
          <div className='mr-10'>
            <div className='h-[28rem] w-[40rem] rounded-lg border border-[#14C38E]'></div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex h-[4rem] w-[14rem] items-center justify-evenly rounded-lg border border-[#14C38E]'>
              <div className='flex flex-col justify-center font-bold'>
                <p>Calories</p>
                <p>Burned</p>
              </div>
              <p className='font-bold'>789</p>
            </div>
            <div className='flex h-[4rem] w-[14rem] items-center justify-evenly rounded-lg border border-[#14C38E]'>
              <div className='flex flex-col justify-center font-bold'>
                <p>Calories</p>
                <p>Burned</p>
              </div>
              <p className='font-bold'>789</p>
            </div>
            <div className='flex h-[4rem] w-[14rem] items-center justify-evenly rounded-lg border border-[#14C38E]'>
              <div className='flex flex-col justify-center font-bold'>
                <p>Calories</p>
                <p>Consumed</p>
              </div>
              <p className='font-bold'>1452</p>
            </div>
            <div className='flex h-[4rem] w-[14rem] items-center justify-evenly rounded-lg border border-[#14C38E]'>
              <div className='flex flex-col justify-center font-bold'>
                <p>Calories</p>
                <p>Difference</p>
              </div>
              <p className='font-bold'>663</p>
            </div>
            <div className='flex h-[4rem] w-[14rem] items-center justify-evenly rounded-lg border border-[#14C38E]'>
              <div className='flex flex-col justify-center font-bold'>
                <p>Current</p>
                <p>Weight</p>
              </div>
              <p className='font-bold'>
                85.0<span className='ml-1'>Kg</span>
              </p>
            </div>
          </div>
        </div>
        <div className='mt-10 h-10 w-[100px] bg-red-700'></div>
      </div>
      <div className='ml-[3rem] h-[100vh] w-[27vw] bg-[#14C38E]'></div>
    </div>
  );
}
