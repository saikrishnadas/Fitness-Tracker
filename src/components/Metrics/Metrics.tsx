import MetricBox from '@/components/Metrics/MetricBox';
import WeightTracker from '@/components/Timeline/WeightTracker';
import { useRecoilState } from 'recoil';
import { chartState } from '../../Atoms/chartAtom';

function Metrics() {
  const [chart, setChart] = useRecoilState(chartState);
  return (
    <div className='mt-10 grid grid-cols-2 gap-4 lg:mt-0 lg:ml-10 lg:grid-cols-1 lg:gap-6'>
      <span onClick={() => setChart('calories-burned')}>
        <MetricBox
          text='calories'
          description='burned'
          count={789}
          isWeight={false}
          color='#14C38E'
        />
      </span>
      <span onClick={() => setChart('calories-consumed')}>
        <MetricBox
          text='calories'
          description='consumed'
          count={1452}
          isWeight={false}
          color='#14C38E'
        />
      </span>
      <span onClick={() => setChart('calories-difference')}>
        <MetricBox
          text='calories'
          description='difference'
          count={663}
          isWeight={false}
          color='#14C38E'
        />
      </span>
      <span onClick={() => setChart('weight')}>
        <MetricBox
          text='current'
          description='weight'
          count={85.0}
          isWeight={true}
          color='#14C38E'
        />
      </span>
      {/* <WeightTracker count={80} /> */}
    </div>
  );
}

export default Metrics;
