import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Hi</Button>);
    expect(getByText('Hi')).toBeDefined();
  });
});
