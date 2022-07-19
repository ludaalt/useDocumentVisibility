import { useEffect, useState } from 'react';

export function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const isPageVisible = () => {
    if (document.hidden) {
      setVisible(false);
      setCount((count) => count + 1);
    } else {
      setVisible(true);
    }
  };

  const onVisibilityChange = (callback) => {
    callback(visible);
  };

  useEffect(() => {
    document.addEventListener('visibilityChange', isPageVisible);
    return () => {
      document.removeEventListener('visibilityChange', isPageVisible);
    };
  }, [visible]);

  return {
    count,
    visible,
    onVisibilityChange,
  };
}
