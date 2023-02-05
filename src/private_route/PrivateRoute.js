import React from "react";
import { Navigate, Outlet } from "react-router";
import { SpinnerComponent } from "../components/SpinnerComponent";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const PrivateRoute = () => {
  const { isLoading, loggedInAsAuthor, loggedInAsAdmin, loggedIn } =
    useAuthStatus();

  if (isLoading) {
    return <SpinnerComponent />;
  }
  return (
    <div>
      {loggedInAsAuthor || loggedInAsAdmin ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};
export const UserPrivateRoute = () => {
  const { isLoading, loggedIn } = useAuthStatus();

  if (isLoading) {
    return <SpinnerComponent />;
  }
  return <div>{loggedIn ? <Outlet /> : <Navigate to="/" />}</div>;
};
