import React from 'react';

interface TypographyProps {
  children: string;
}
declare function Title(props: TypographyProps): React.JSX.Element;

interface ButtonProps {
  clickHandler: () => void;
  children: string | string[] | JSX.Element | JSX.Element[];
  type: 'button' | 'submit' | 'reset';
}
declare function PrimaryButton(props: ButtonProps): React.JSX.Element;

export { PrimaryButton, Title };
