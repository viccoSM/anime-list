import { useCallback, useContext } from "react";
import { AppContext } from "..";
import { INITIAL_STATE_MESSAGE, SHOW_ALERT} from "@/context/reducersContext/modal-alert-reducers";

const useModalAlert = () => {
  const {dispatch} = useContext(AppContext);

  const showModalAlert = useCallback((message: string, onConfirm:() => void = () => hideModalAlert) => {
    dispatch({
      type:  SHOW_ALERT,
      payload: {
        message,
        onConfirm,
      },
    });
  }, [dispatch]);

  const hideModalAlert = useCallback(() => {
    dispatch({
      type:  INITIAL_STATE_MESSAGE,
    });
  }, [dispatch]);

  return {showModalAlert, hideModalAlert};
};


export default useModalAlert