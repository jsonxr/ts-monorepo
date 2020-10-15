/* eslint-disable no-alert */
import { meaningOfLife } from '@app/shared';
import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
} from 'react';

export enum ButtonNumber {
  One = '1',
  Two = '2',
}
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
}
export const Button = ({
  text = 'Click Me...',
  ...props
}: ButtonProps): ReactElement => (
  <button
    type="button"
    {...props}
    onClick={() => alert(`the meaning if life is ${meaningOfLife}`)}
  >
    {text}
  </button>
);
