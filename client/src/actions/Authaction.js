import { returnError } from "./Erroraction";

export const loadUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "USER_LOADING" });

    // Get token

    const config = tokenConfig(getState);
    if (config !== null) {
      const response = await fetch("/api/auth/user", tokenConfig(getState));

      dispatch({ type: "USER_LOADED", payload: response.data });
    } else {
      console.log("in erroe");
      dispatch(returnError("No token , authorize deny", "401"));
      dispatch({ type: "AUTH_ERROR" });
    }
  };
};
export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token !== null) {
    config.headers["x-auth-token"] = token;
    return config;
  }else{
      return null
  }

  
};
