import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('tests the color history hook', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();

    const square = screen.getByRole('display', { name: 'color-squre' });
    expect(square).toHaveStyle({ 'background-color': 'rgb(255, 0, 0)' })

    const colorPicker = screen.getByRole('colorbox', { name: 'color-picker' });
    fireEvent.change(colorPicker, 'rgb(0, 0, 255)');
    waitFor(() => {
      expect(square).toHaveStyle({ 'backgroundColor': 'rgb(0, 255, 0)' });
    });

    fireEvent.change(colorPicker, 'rgb');
  });
});

