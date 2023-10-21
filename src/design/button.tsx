'use client';
import React from 'react';

interface ButtonProps {
  clickHandler: () => void;
  children: string | string[] | JSX.Element | JSX.Element[];
  type: 'button' | 'submit' | 'reset';
}

function PrimaryButton(props: ButtonProps) {
  return (
    <button
      onClick={props.clickHandler}
      type={props.type}
      className="text-md box-shadow w-full rounded-md border-2 border-slate-12 bg-slate-1 px-6 py-2 font-semibold text-slate-12 drop-shadow-md hover:drop-shadow-lg"
    >
      {props.children}
    </button>
  );
}

export { PrimaryButton };
