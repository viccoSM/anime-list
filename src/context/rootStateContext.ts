import { ToastContextState, initialStateToast } from "./reducersContext/toastReducers";

interface AppContextState {
  toast: ToastContextState;
}

const initialState: AppContextState = {
  toast: initialStateToast
};

export { initialState };
export type { AppContextState };
