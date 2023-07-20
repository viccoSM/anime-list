import { FC, createContext, useReducer } from 'react';
import { AppContextState, initialState } from './rootStateContext';
import { AppContextAction, appContextReducer } from './rootActionContext';
import ModalAlert from "@/components/ModalAlert";

const AppContext = createContext<{
  state: AppContextState;
  dispatch: React.Dispatch<AppContextAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppContextProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}

    {/*  Modal Alert*/}
      <ModalAlert
        message={state.modalAlert.message}
        onConfirm={state.modalAlert.onConfirm}
        onClose={() => dispatch({type: "INITIAL_STATE_MESSAGE"})}
        isShow={state.modalAlert.isShow}
      />
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
