/*
import { useState } from 'react';
// @ts-ignore
import { Timeline, TimelineEvent } from 'react-event-timeline';
// @ts-ignore
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderColor: '#14C38E',
  },
};

interface WeightTrackerProps {
  count: number;
}

function WeightTracker({ count }: WeightTrackerProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        onClick={openModal}
        className={`flex h-[6rem] w-[18rem] cursor-pointer items-center justify-evenly rounded-lg border border-[#14C38E] lg:h-[4rem] lg:w-[14rem]`}
      >
        <div className='flex flex-col justify-center text-2xl font-bold lg:text-base'>
          <p className='capitalize'>Current</p>
          <p className='capitalize'>Weight</p>
        </div>
        <p className='text-4xl font-bold lg:text-base'>
          {count}
          <span className='ml-1'>Kg</span>
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <Timeline lineColor='#14C38E'>
          <TimelineEvent
            createdAt='2016-09-12 10:06 PM'
            icon={<i className='material-icons md-18' />}
          >
            85 Kg
          </TimelineEvent>
          <TimelineEvent
            createdAt='2016-09-11 09:06 AM'
            icon={<i className='material-icons md-18' />}
          >
            80 Kg
          </TimelineEvent>
        </Timeline>
      </Modal>
    </>
  );
}

export default WeightTracker;
*/
