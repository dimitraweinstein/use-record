import React from 'react';
import { useRecord } from '../../services/useRecord';

export default function App() {
  const { current, record, undo, redo } = useRecord('#FF0000');
  console.log(current, 'current color');
  return (
    <>
      <button
        onClick={undo}
      >undo</button>
      <button>redo</button>
      <input
        type="color"
        value={current}
        role="colorbox"
        aria-label="color-picker"
        onChange={({ target }) =>
          record(target.value)}
      />
      <div
        style={{ backgroundColor:  current, width: '10rem', height: '10rem' }}
        role="display"
        aria-label="color-square"
      ></div>
    </>
  );
}
