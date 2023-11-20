import Div from '@src/components/Div';
import Typography from '@src/components/Typography';
import React from 'react';

const Info = () => {
  return (
    <Div className="max-w-[55rem] mx-auto pt-[83px]">
      <Typography className="text-center leading-[40px]">
        Meet{' '}
        <Typography className="border-b leading-[30px]   inline-block border-accent">
          0xdevs
        </Typography>{' '}
        – a software powerhouse at the intersection of creativity and
        technology. Our name blends{' '}
        <Typography className="border-b leading-[30px]   inline-block border-accent">
          '0x'
        </Typography>{' '}
        from hexadecimal with{' '}
        <Typography className="border-b leading-[30px]   inline-block border-accent">
          'devs'
        </Typography>{' '}
        for developers, reflecting our versatile skill set. Specializing in web
        and mobile applications, we infuse each project with youthful energy and
        innovative solutions. With Typescript language ecosystem, we're the
        go-to team for dynamic and impactful software development.
      </Typography>
    </Div>
  );
};

export default Info;
