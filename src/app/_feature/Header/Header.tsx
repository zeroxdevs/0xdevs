import Div from '@src/components/Div';
import Typography from '@src/components/Typography';
import EmailForm from './composite/EmailForm';
import CountDown from './composite/CountDown';

const Header = () => {
  return (
    <Div className="bg-secondary flex flex-col pb-[54px]">
      <Typography
        variant="TextLg"
        className="text-accent pt-[33px] text-center"
      >
        0xDevs
      </Typography>
      <Div className="flex   justify-center items-center pt-[32px]">
        <Typography
          variant="Heading1"
          className="text-center md:!text-[18px]     pr-[13px]"
        >
          We will come soon
        </Typography>
        <Typography
          variant="Heading1"
          className="text-center md:!text-[18px] text-accent rotate-[30deg]"
        >
          :)
        </Typography>
      </Div>
      <Div className="flex justify-center   pt-[16px]">
        <Div className="border-solid border-[1px] border-accent rounded-[15px] w-fit md:w-[80%] px-[15px] py-[24px]">
          <Typography
            variant="Heading3"
            className="text-center md:hidden pb-[27px]"
          >
            Countdown to Commence
          </Typography>
          <Div>
            <CountDown />
          </Div>
        </Div>
      </Div>
      <Div>
        <EmailForm />
      </Div>
    </Div>
  );
};

export default Header;
