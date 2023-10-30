import { INCREMENT_COUNTER } from '../actions';

type ActionType = {
  type: string
  payload: number | string | boolean | string[];
};

const INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return { count: state.count + (action.payload as number) };
    }
    default:
      return state;
  }
}

export default counterReducer;
