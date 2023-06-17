import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  officer:null,
  company:null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START_OFFICER":
      return {
        officer: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS_OFFICER":
      return {
        officer: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE_OFFICER":
      return {
        officer: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT_OFFICER":
      return {
        officer: null,
        loading: false,
        error: null,
      };
      case "LOGIN_START_COMPANY":
      return {
        company: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS_COMPANY":
      return {
        company: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE_COMPANY":
      return {
        company: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT_COMPANY":
      return {
        company: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};