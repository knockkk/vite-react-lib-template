import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Button from '../src';

afterEach(cleanup);

it('button should render', () => {
  const { queryByText } = render(<Button>click</Button>);

  expect(queryByText('click')).toBeTruthy();
});
