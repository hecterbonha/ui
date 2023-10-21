import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { PrimaryButton } from './button';

describe('button components', () => {
  it('renders with props', () => {
    render(
      <>
        <PrimaryButton clickHandler={() => {}} type="button">
          Hello World
        </PrimaryButton>
      </>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('handling click', () => {
    const market = {
      getApples: () => 100
    };
    const getApplesSpy = vi.spyOn(market, 'getApples');
    render(
      <>
        <PrimaryButton
          clickHandler={() => {
            market.getApples();
          }}
          type="button"
        >
          Hello World
        </PrimaryButton>
      </>
    );
    screen.getByText('Hello World').click();
    expect(getApplesSpy).toBeCalled();
  });
});
