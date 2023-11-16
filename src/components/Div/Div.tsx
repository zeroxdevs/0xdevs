import React from 'react';
import { DivProps } from './@types';

function Div(props: DivProps) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

export default Div;
