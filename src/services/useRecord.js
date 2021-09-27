import { useEffect, useState } from 'react';

export const useRecord = (initialColor) => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([initialColor]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const record = (brandNewColor) => {
    // console.log(brandNewColor, 'new color');
    const Index = currentIndex + 1;
    history.splice(Index, 0, brandNewColor);
    setCurrentIndex(Index);
    setCurrent(brandNewColor);
    setHistory(history);
  };

  const undo = () => {
    if (currentIndex > 0) {
      const previousColor = history[ currentIndex - 1 ];
      setCurrent(previousColor);
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };
  const redo = () => {
    const previousHistory = history.slice();
    if (currentIndex < (previousHistory.length - 1)) {
      const target = history[ currentIndex + 1 ];
      setCurrent(target);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return { current, undo, redo, record };
};
