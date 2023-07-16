import { toastReducer } from "./reducersContext/toastReducers";
import { AppContextState } from "./rootStateContext";

interface AppContextAction {
  type: string;
  payload?: any;
}

const appContextReducer = (
  state: AppContextState,
  action: AppContextAction
): AppContextState => {
  switch (action.type) {
    case 'SET_CONTEXT':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return {
        ...state,
        toast: toastReducer(state.toast, action),
      };
  }
};


export { appContextReducer };
export type { AppContextAction };