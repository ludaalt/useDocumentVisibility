# Реализация npm модуля

[![version](https://img.shields.io/npm/v/@ludaalt/react-document-visibility.svg)](https://www.npmjs.com/package/@ludaalt/react-document-visibility)

## React - useDocumentVisibility

Стек: react, typescript, rollup

Реализован react hook, который

- скажет, активна (видна) ли сейчас вкладку браузера
- скажет, сколько раз с момента инициализации компонента вкладка становилась неактивной (невидимой)
- предоставит функцию, в которой можно подписаться на изменение активности (видимости) текущей вкладки

### Пример подключения модуля

https://codesandbox.io/s/hungry-architecture-5hbr34

### Пример работы хука

`useDocumentVisibility.ts`

```jsx
import React from 'react';
import { useDocumentVisibility } from '@ludaalt/react-document-visibility';

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible);
    });
    onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible);
    });
  }, []);

  return (
    <div>
      <span>
        Вы покинули страницу: {count} раз Вкладка активна? {visible ? 'да' : 'нет'}
      </span>
    </div>
  );
};
```
