import React from 'react';
import { useRecord } from '../../services/useRecord';

export default function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');
  console.log(current, 'THIS IS OUR TEST');
  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        type="color"
        value={current}
        role="colorbox"
        aria-label="color-picker"
        onChange={({ target }) =>
          record(target.value)}
      />
      <div
        style={{ backgroundColor: current, width: '10rem' }}
        role="display"
        aria-label="color-square"
      ></div>
    </>
  );
}
