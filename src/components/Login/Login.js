import React from "react";
import useFirebase from "../../hooks/useFirebase";

import "./Login.css";
const Login = () => {
  const { handleSignInWithGoogle } = useFirebase();
  return (
    <div className="login-page p-5">
      <div>
        <div className="login-box mt-5 px-4">
          <div>
            <h2 className="text-center fw-bold fs-3 mb-5">Login</h2>
            <button onClick={handleSignInWithGoogle} className="google-btn">
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
