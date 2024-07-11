import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../action/action';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

const _counterReducer = createReducer(
  initialState,

  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);

export function counterReducer(state: State | undefined, action: Action) {
  return _counterReducer(state, action);
}
