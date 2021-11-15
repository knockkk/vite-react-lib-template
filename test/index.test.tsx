import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src';

describe('button', () => {
  it('button should render', () => {
    const { queryByText } = render(<Button>click</Button>);

    expect(queryByText('click')).toBeTruthy();
  });

  it('onClick should work', () => {
    const onClick = jest.fn();
    const { queryByText } = render(<Button onClick={onClick}>click</Button>);

    fireEvent.click(queryByText('click'));
    expect(onClick).toHaveBeenCalled();
  });
});
