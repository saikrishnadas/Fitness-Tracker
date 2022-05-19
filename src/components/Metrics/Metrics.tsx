import MetricBox from '@/components/Metrics/MetricBox';
function Metrics() {
  return (
    <div className='mt-10 grid grid-cols-2 gap-4 lg:mt-0 lg:ml-10 lg:grid-cols-1 lg:gap-6'>
      <MetricBox
        text='calories'
        description='burned'
        count={789}
        isWeight={false}
        color='#14C38E'
      />
      <MetricBox
        text='calories'
        description='consumed'
        count={1452}
        isWeight={false}
        color='#14C38E'
      />
      <MetricBox
        text='calories'
        description='difference'
        count={663}
        isWeight={false}
        color='#14C38E'
      />
      <MetricBox
        text='current'
        description='weight'
        count={85.0}
        isWeight={true}
        color='#14C38E'
      />
    </div>
  );
}

export default Metrics;
