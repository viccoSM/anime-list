import { FC, createContext, useReducer } from 'react';
import { AppContextState, initialState } from './rootStateContext';
import { AppContextAction, appContextReducer } from './rootActionContext';

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
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
