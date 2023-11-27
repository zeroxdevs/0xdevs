import Div from '@src/components/Div';
import Typography from '@src/components/Typography';

function Description() {
  return (
    <Div className="max-w-[55rem] mx-auto pt-[83px]">
      <Typography className="text-center leading-[40px]">
        Meet&nbsp;
        <span className="border-b leading-[30px] inline-block border-accent">
          0xdevs
        </span>
        &nbsp;– a software powerhouse at the intersection of creativity and
        technology. Our name blends&nbsp;
        <span className="border-b leading-[30px] inline-block border-accent">
          '0x'
        </span>
        &nbsp;from hexadecimal with&nbsp;
        <span className="border-b leading-[30px] inline-block border-accent">
          'devs'
        </span>
        &nbsp;for developers, reflecting our versatile skill set. Specializing
        in web and mobile applications, we infuse each project with youthful
        energy and innovative solutions. With Typescript language ecosystem,
        we're the go-to team for dynamic and impactful software development.
      </Typography>
    </Div>
  );
}

export default Description;
