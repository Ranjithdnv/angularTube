import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
// export const increment = createAction<{ type: 'uu'; payload: 'uu' }>({
//   type: 'uu',
//   payload: 'uu',
// });
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
