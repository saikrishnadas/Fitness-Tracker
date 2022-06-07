interface MetricBoxProps {
  text: string;
  description: string;
  count: number;
  isWeight: boolean;
  color: string;
}

function MetricBox({
  text,
  description,
  count,
  isWeight,
  color
}: MetricBoxProps) {
  return (
    <div
      className={`flex h-[6rem] w-[18rem] items-center justify-evenly rounded-lg border lg:h-[4rem] lg:w-[14rem] border-[${color}]`}
    >
      <div className='flex cursor-pointer flex-col justify-center text-2xl font-bold lg:text-base'>
        <p className='capitalize'>{text}</p>
        <p className='capitalize'>{description}</p>
      </div>
      {isWeight ? (
        <p className='text-4xl font-bold lg:text-base'>
          {count}
          <span className='ml-1'>Kg</span>
        </p>
      ) : (
        <p className='text-4xl font-bold lg:text-base'>{count}</p>
      )}
    </div>
  );
}

export default MetricBox;
