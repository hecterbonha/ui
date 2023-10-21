import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Title } from './typography';

describe('typography components', () => {
  it('renders with props', () => {
    render(
      <>
        <Title>Hello World</Title>
      </>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
