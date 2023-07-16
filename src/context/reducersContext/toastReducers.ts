export const SHOW_TOAST = 'SHOW_TOAST'
export const HIDE_TOAST = 'HIDE_TOAST'
export const INITIAL_STATE_MESSAGE = 'INITIAL_STATE_MESSAGE'

export interface ToastContextState {
  isShow: boolean;
  message: string;
  type: 'success' | 'error' | 'info' | undefined;
}

export const initialStateToast: ToastContextState = {
  isShow: false,
  message: '',
  type: undefined
}

export const toastReducer = (state: ToastContextState, action: any) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        isShow: true,
        ...action.payload
      };
    case HIDE_TOAST:
      return {
        ...state,
        isShow: false
      };
      case INITIAL_STATE_MESSAGE:
        return initialStateToast
    default:
      return state;
  }
};