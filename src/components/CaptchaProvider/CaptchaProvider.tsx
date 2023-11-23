'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { CaptchaProviderProps } from './@types';

function CaptchaProvider(props: CaptchaProviderProps) {
  const { children, ...rest } = props;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      {...rest}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}

export default CaptchaProvider;
