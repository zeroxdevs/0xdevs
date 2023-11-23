import { ReactNode } from 'react';

export interface IGoogleReCaptchaProviderProps {
  reCaptchaKey: string;
  language?: string;
  useRecaptchaNet?: boolean;
  useEnterprise?: boolean;
  scriptProps?: {
    nonce?: string;
    defer?: boolean;
    async?: boolean;
    appendTo?: 'head' | 'body';
    id?: string;
    onLoadCallbackName?: string;
  };
  container?: {
    element?: string | HTMLElement;
    parameters: {
      badge?: 'inline' | 'bottomleft' | 'bottomright';
      theme?: 'dark' | 'light';
      tabindex?: number;
      callback?: () => void;
      expiredCallback?: () => void;
      errorCallback?: () => void;
    };
  };
  children: ReactNode;
}

export interface CaptchaProviderProps
  extends Omit<IGoogleReCaptchaProviderProps, 'reCaptchaKey'> {}
