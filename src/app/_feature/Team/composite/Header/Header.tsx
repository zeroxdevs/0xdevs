import Div from '@src/components/Div';
import Typography from '@src/components/Typography';

function Header() {
  return (
    <Div className="flex flex-col justify-center items-center">
      <Typography variant="Heading3">Meet Our Team</Typography>
      <Div className="w-[470px] h-[3px] bg-accent"></Div>
      <Div className="w-[200px] mt-[17px] h-[3px] bg-[#363636]"></Div>
    </Div>
  );
}

export default Header;
