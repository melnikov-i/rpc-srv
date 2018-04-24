import { Dispatch as ReduxDispatch } from 'redux';

import { IRootState } from '@src/redux';

export type Dispatch = ReduxDispatch<IRootState>;
