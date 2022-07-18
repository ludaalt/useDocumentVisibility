import React, { useEffect } from 'react'
import { useDocumentVisibility } from '../hooks/useDocumentVisibility.js'
//import { useDocumentVisibility } from '@my-npm-user/react-document-visibility'

const container = {
    margin: '200px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace'
}

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange  } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible)
    });
    onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible)
    });
  }, [])

  return (
    <div style={container}>
        <p>Вы покинули страницу: {count} раз</p>
        <p>Вкладка активна? {visible ? 'да' : 'нет'}</p>
    </div>
  );
};

export default LeaveTabCounter;