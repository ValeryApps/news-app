import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getUserById } from "../api/authApi";

export const useAuthStatus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInAsAuthor, setLoggedInAsAuthor] = useState(false);
  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(
      auth,
      async (currentUser) => {
        try {
          const user = await getUserById(currentUser?.uid);
          if (currentUser && user["roles"]?.indexOf("author") != -1) {
            setLoggedInAsAuthor(true);
            setLoggedIn(true);
          } else if (currentUser && user["roles"]?.indexOf("admin") != -1) {
            setLoggedInAsAdmin(true);
            setLoggedIn(true);
          } else if (currentUser) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      },
      []
    );
  }, [auth]);

  return { isLoading, loggedInAsAuthor, loggedIn, loggedInAsAdmin };
};
