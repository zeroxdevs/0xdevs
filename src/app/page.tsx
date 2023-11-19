import Button from '@src/components/Button';
import Div from '@src/components/Div';
import Divider from '@src/components/Divider';
import Input from '@src/components/Input/Input';
import Typography from '@src/components/Typography';
import Team from '@src/app/_feature/Team/Team';

export default function Home() {
  return (
    <Div>
      <Div className="bg-secondary flex flex-col pb-[54px]">
        <Typography
          variant="TextLg"
          className="text-accent pt-[33px] text-center"
        >
          0xDevs
        </Typography>
        <Div className="flex justify-center items-center pt-[32px]">
          <Typography variant="Heading1" className="text-center pr-[13px]">
            We will come soon
          </Typography>
          <Typography
            variant="Heading1"
            className="text-center text-accent rotate-[30deg]"
          >
            :)
          </Typography>
        </Div>
        <Div className="flex justify-center pt-[16px]">
          <Div className="border-solid border-[1px] border-accent rounded-[15px] w-fit px-[15px] py-[24px]">
            <Typography variant="Heading3" className="text-center pb-[27px]">
              Countdown to Commence
            </Typography>
            <Div>
              <Div className="flex">
                <Div className="px-[10px]">
                  <Div className="w-[130px] h-[130px] rounded-[15px] border-solid border-[1px] border-accent  bg-primary flex justify-center items-center">
                    <Typography style={{ fontSize: '54px' }}>20</Typography>
                  </Div>
                  <Div className="pt-[32px]">
                    <Typography variant="TextSm" className="text-center">
                      DAYS
                    </Typography>
                  </Div>
                </Div>
                <Div className="px-[10px]">
                  <Div className="w-[130px] h-[130px] rounded-[15px] border-solid border-[1px] border-accent  bg-primary flex justify-center items-center">
                    <Typography style={{ fontSize: '54px' }}>20</Typography>
                  </Div>
                  <Div className="pt-[32px]">
                    <Typography variant="TextSm" className="text-center">
                      HOURS
                    </Typography>
                  </Div>
                </Div>
                <Div className="px-[10px]">
                  <Div className="w-[130px] h-[130px] rounded-[15px] border-solid border-[1px] border-accent  bg-primary flex justify-center items-center">
                    <Typography style={{ fontSize: '54px' }}>20</Typography>
                  </Div>
                  <Div className="pt-[32px]">
                    <Typography variant="TextSm" className="text-center">
                      MUNUTES
                    </Typography>
                  </Div>
                </Div>
                <Div className="px-[10px]">
                  <Div className="w-[130px] h-[130px] rounded-[15px] border-solid border-[1px] border-accent  bg-primary flex justify-center items-center">
                    <Typography style={{ fontSize: '54px' }}>20</Typography>
                  </Div>
                  <Div className="pt-[32px]">
                    <Typography variant="TextSm" className="text-center">
                      SECONDS
                    </Typography>
                  </Div>
                </Div>
              </Div>
            </Div>
            <Div className="flex justify-center pt-[20px]">
              <Div className="w-fit border-solid border-[1px] border-accent rounded-[5px] flex justify-center items-center p-[4px]">
                <Div className="px-[12px]">
                  <Input
                    className="w-[200px]"
                    placeholder="Your Email Address"
                  ></Input>
                </Div>
                <Div>
                  <Button>Alert me</Button>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Divider variant="primary" />
      <Team />
    </Div>
  );
}
