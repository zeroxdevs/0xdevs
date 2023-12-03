import Div from '@src/components/Div';
import Typography from '@src/components/Typography';

function Header() {
  return (
    <Div className="flex flex-col justify-center items-center">
      <Typography variant="Heading3" className="md:!text-[18px]">
        Meet Our Team
      </Typography>
      <Div className="w-[470px] md:w-[100px] h-[3px] md:h-[2px] bg-accent"></Div>
      <Div className="w-[200px] md:w-[50px] mt-[17px] md:mt-[4px] h-[3px] md:h-[2px] bg-[#363636]"></Div>
    </Div>
  );
}

export default Header;
