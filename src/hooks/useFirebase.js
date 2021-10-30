import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // handle sign in with google
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // logout handle
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // on auth changed handle
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    handleSignInWithGoogle,
    user,
    error,
    logOut,
  };
};

export default useFirebase;
