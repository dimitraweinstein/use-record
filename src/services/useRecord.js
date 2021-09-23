import { useEffect, useState } from 'react';

export const useRecord = (initialColor = '#FF0000') => {
  const [current, setCurrent] = useState(initialColor);
  const [ history, setHistory ] = useState([]);
  const [ newColor, setNewColor ] = useState();

  const record = (brandNewColor) => {
    console.log(brandNewColor);
  };

  const undo = () => {
    const currentIndex = history.indexOf(current);
    const targetIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
    setHistory(history[targetIndex]);
  };
  const redo = () => { };

  useEffect(() => {
    console.log(history);
    setHistory((previousHistory) => [...previousHistory, current]);
    console.log(history);
  }, [current]);

  return { current, undo, redo, record };
};
