'use client';

import Button from '@src/components/Button';
import Div from '@src/components/Div';
import Input from '@src/components/Input/Input';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import z from 'zod';

export const waitListSchema = z.object({
  email: z.string().email(),
});

interface EmailFormState {
  email: string;
  error: boolean;
}

function EmailForm() {
  const [state, setState] = useState<EmailFormState>({
    email: '',
    error: false,
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, email: e.target.value });
  };
  const submitHandler = async () => {
    const validation = waitListSchema.safeParse({
      email: state.email,
    });
    if (validation.success) {
      if (executeRecaptcha) {
        const token = await executeRecaptcha();
        fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            email: state.email,
          }),
        })
          .then((response) => {
            if (response.ok) {
              // Success logic
            } else {
              // Failure logic
            }
          })
          .catch((error) => {
            // Network error or other issues
          });
      }
    } else {
      setState({ ...state, error: true });
    }
  };

  const handelEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      submitHandler();
    }
  };

  useEffect(() => {
    let errorTimeOut: NodeJS.Timeout;
    if (state.error) {
      errorTimeOut = setTimeout(() => {
        setState({ email: '', error: false });
      }, 1 * 1000);
    }
    return () => {
      if (errorTimeOut) {
        clearTimeout(errorTimeOut);
      }
    };
  }, [state]);

  return (
    <Div
      className={classNames([
        'flex justify-center pt-[20px]',
        state.error && 'animated-bounce',
      ])}
    >
      <Div className="w-fit border-solid border-[1px] border-accent rounded-[5px] flex justify-center items-center p-[4px]">
        <Div className="px-[12px]">
          <Input
            onKeyDown={handelEnterPress}
            onChange={changeHandler}
            className="w-[200px]"
            placeholder="Your Email Address"
            value={state.email}
          />
        </Div>
        <Div>
          <Button onClick={submitHandler} type="submit">
            Alert me
          </Button>
        </Div>
      </Div>
    </Div>
  );
}

export default EmailForm;
