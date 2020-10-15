/* eslint-disable no-alert */
import { meaningOfLife } from '@app/shared';
import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
} from 'react';

export enum DropdownEnum {
  One = '1',
  Two = '2',
}
export interface DropdownProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}
export const Dropdown = ({
  text = 'Click Me...',
  ...props
}: DropdownProps): ReactElement => (
  <button
    type="button"
    {...props}
    onClick={() => alert(`the meaning if life is ${meaningOfLife}`)}
  >
    {text}
  </button>
);
