'use client';

import Div from '@src/components/Div';
import CountDownCard from '../CountDownCard';
import { useEffect, useState } from 'react';
import { milisecInterpreter } from '@src/utils/helper';

function CountDown() {
  const [now, setNow] = useState<Date>(new Date());
  const targetDate = new Date(process.env.NEXT_PUBLIC_RELEASE_TIME as string);
  const timeDifference = Number(targetDate) - Number(now);
  const { day, hour, min, sec } = milisecInterpreter(timeDifference);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [now]);
  return (
    <Div className="flex">
      <CountDownCard label="DAY" count={day} />
      <CountDownCard label="HOUR" count={hour} />
      <CountDownCard label="MUNUTE" count={min} />
      <CountDownCard label="SECOND" count={sec} />
    </Div>
  );
}

export default CountDown;
