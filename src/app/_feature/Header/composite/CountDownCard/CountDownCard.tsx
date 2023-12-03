'use client';

import Div from '@src/components/Div';
import Typography from '@src/components/Typography';
import { CountDownCardProps } from './@types';
import { useEffect, useState } from 'react';

function CountDownCard(props: CountDownCardProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { count, label } = props;
  return (
    <Div className="px-[10px]">
      <Div className="w-[130px] md:w-[50px] md:h-[50px] h-[130px] rounded-[15px] border-solid border-[1px] border-accent  bg-primary flex justify-center items-center">
        <Typography style={{ fontSize: '54px' }} className="md:!text-[8px]">
          {isClient ? `${count}` : '0'}
        </Typography>
      </Div>
      <Div className="pt-[32px] md:pt-[8px]">
        <Typography variant="TextSm" className="text-center md:!text-[8px]">
          {isClient ? label : '-'}
        </Typography>
      </Div>
    </Div>
  );
}

export default CountDownCard;
