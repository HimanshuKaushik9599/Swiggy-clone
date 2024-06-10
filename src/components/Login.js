import React, { useRef, useState } from "react";
import { checkValidationdata } from "../../Utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const toogleSignInform = () => {
    setIsLogin(!isLogin);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleSubmitButton = () => {
    const message = checkValidationdata(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/");
            })
            .catch((error) => {});

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="margin-div mx-3 slide-in-right d-flex align-items-center justify-content-center">
      <div>
        <div className="d-flex">
          <div className="">
            <h2> {isLogin ? "Sign Up" : "Sign In "} </h2>
            <span>Or </span>
            <span className="text-warning cursor-class" onClick={toogleSignInform}>
              {isLogin ? "Already have an account" : "Create an account"}
            </span>
          </div>
          <div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="loading"
              className="logo mx-5"
            ></img>
          </div>
        </div>
        <div>
          <form
            className="w-75 cursor-pointer"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {isLogin && (
              <input
                ref={name}
                placeholder="Name"
                type="text"
                className="form-control p-3 mt-2 "
              ></input>
            )}
            <input
              ref={email}
              placeholder="Email "
              className="form-control p-3 "
              type="email"
            ></input>
            <input
              ref={password}
              placeholder={isLogin ? " Create password" : "Password"}
              className="form-control p-3"
              type="password"
            ></input>
            <h6 className="text-danger m-1">{errorMessage}</h6>
            <button
              type="submit"
              className="form-control p-3 my-2 bg-warning"
              onClick={handleSubmitButton}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
