import React, { useCallback, useReducer } from 'react';

export enum Modals {
  'signUp' = 'sign-up',
  'login' = 'login'
}

type State = Record<Modals, boolean>;

interface ModalContextValue {
  showModal: (modalName: string) => void;
  modals: State;
}

export const ModalContext = React.createContext<ModalContextValue>({} as ModalContextValue);

export const ModalProvider: React.FC = ({ children }: { children: React.ReactNode }) => {
  // set state with the passed modalName and toggle the boolean value against that modalName
  // in the modals state if showModal is called from the consuming components
  const [modals, dispatch] = useReducer(
    (state: State, action: Modals) => ({
      ...state,
      [action]: !state[action]
    }),
    {} as State
  );

  const showModal = useCallback((modalName: Modals) => {
    dispatch(modalName);
  }, []);

  const value: ModalContextValue = {
    showModal,
    modals
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

/*
[EXAMPLE USAGE START]
() => {
  const { showModal, modals } = useContext(ModalContext);

  return (
    <>
      <button onClick={() => showModal(Modals['signUp'])}>show modal</button>
      {modals[Modals['signUp']] && (
        <Modal>
          <SignUp
            handleClose={() => {
              showModal(Modals['signUp']);
            }}
          />
        </Modal>
      )}
    </>
  )
}
[EXAMPLE USAGE END]
*/
