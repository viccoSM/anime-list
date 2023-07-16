import { useCallback, useContext, useEffect } from "react";
import { INITIAL_STATE_MESSAGE, SHOW_TOAST } from "../reducersContext/toastReducers";
import { AppContext } from "..";

const useToast = () => {
  const {dispatch, state} = useContext(AppContext);

  const showToast = useCallback((message: string, type: string = 'success') => {
    dispatch({
      type:  SHOW_TOAST,
      payload: {
        message,
        type,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if (!state.toast.isShow) {
      const timer = setTimeout(() => {
        dispatch({
          type: INITIAL_STATE_MESSAGE,
        });
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [state.toast.isShow, dispatch]);

  return {showToast};
};


export default useToast