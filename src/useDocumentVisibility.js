import { useEffect, useState } from 'react';

export function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const isPageVisible = () => {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        setVisible(false);
        setCount(count + 1);
      } else {
        setVisible(true);
      }
    });
  };

  const onVisibilityChange = (callback) => {
    callback(visible);
  };

  useEffect(() => {
    isPageVisible();
    onVisibilityChange;
  }, []);

  return {
    count,
    visible,
    onVisibilityChange,
  };
}
