import React from 'react';
import { render } from '@testing-library/react';
import Button from '../src';

it('button should render', () => {
  const { queryByText } = render(<Button>click</Button>);

  expect(queryByText('click')).toBeTruthy();
});
