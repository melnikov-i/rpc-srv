import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import MainUsage from '@src/usage/MainUsage';

const Root: JSX.Element = (
  <Provider store={ store }>
    <MainUsage />
  </Provider>
);

render(
  Root, document.getElementById('app'),
);
