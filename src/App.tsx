import React from "react";
import { useReactiveVar } from "@apollo/client";
import { LoggedInRouter } from "./routers/logged-in-router";
import { LoggedOutRouter } from "./routers/logged-out-router";
import { isLoggedInVar } from "./apollo";
// import { useEffect } from "react";

export const App = () => {
  // useEffect(() => {
  //   window.location.href = "https://doroedu.oopy.io";
  // }, []);
  // return <></>;
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};

export default App;
