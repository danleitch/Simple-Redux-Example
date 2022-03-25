import { Action } from 'redux';
import { ADD_ONE, MINUS_ONE, RESET } from './actions';

export interface CounterState {
  number: number;
}

const initialState = {
  number: 0,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        number: state.number + 1,
      };

    case MINUS_ONE:
      return {
        number: state.number - 1,
      };

    case RESET:
      return {
        number: (state.number = 0),
      };

    default:
      return state;
  }
}
export default reducer;
