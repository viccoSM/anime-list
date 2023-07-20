import { ToastContextState, initialStateToast } from "./reducersContext/toastReducers";
import {AlertContextState, initialStateModalAlert} from "@/context/reducersContext/modal-alert-reducers";

interface AppContextState {
  toast: ToastContextState;
  modalAlert: AlertContextState
}

const initialState: AppContextState = {
  toast: initialStateToast,
  modalAlert: initialStateModalAlert
};

export { initialState };
export type { AppContextState };
