export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'
export const INITIAL_STATE_MESSAGE = 'INITIAL_STATE_MESSAGE'

export interface AlertContextState {
  isShow: boolean;
  message: string;
  onConfirm: () => void
}

export const initialStateModalAlert: AlertContextState = {
  isShow: false,
  message: '',
  onConfirm: () => {}
}

export const modalAlertReducer = (state: AlertContextState, action: any) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        isShow: true,
        ...action.payload
      };
    case HIDE_ALERT:
      return {
        ...state,
        isShow: false
      };
    case INITIAL_STATE_MESSAGE:
      return initialStateModalAlert
    default:
      return state;
  }
};