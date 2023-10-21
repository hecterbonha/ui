'use client';
import React from 'react';

interface ButtonProps {
  clickHandler: () => void;
  children: string | string[] | JSX.Element | JSX.Element[];
  type: 'button' | 'submit' | 'reset';
}

function PrimaryButton(props: ButtonProps) {
  return (
    <button onClick={props.clickHandler} type={props.type}>
      {props.children}
    </button>
  );
}

export { PrimaryButton };
