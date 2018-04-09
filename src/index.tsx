import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
// import LayoutConnected from '@src/connected/LayoutConnected.usage';
    // <LayoutConnected />

const Root: JSX.Element = (
  <Provider store={ store }>
    <div>
      <p>Hello, World!</p>
    </div>
  </Provider>
);

render(
  Root, document.getElementById('app')
);