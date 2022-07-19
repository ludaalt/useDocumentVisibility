import { useEffect, useState } from 'react';

export function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const isPageVisible = () => {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        setVisible(false);
        setCount((count) => count + 1);
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

    document.addEventListener('visibilityChange', onVisibilityChange);
    return () => {
      document.removeEventListener('visibilityChange', onVisibilityChange);
    };
  }, [visible]);

  return {
    count,
    visible,
    onVisibilityChange,
  };
}
