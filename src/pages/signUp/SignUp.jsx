import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import style from "./SignUp.module.css";
// import CountryStateCity from "./CountryStateCity";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log("Signing up...", email, password, confirmPassword, username);
    setError(null);
    setLoading(false);

    try {
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      console.log("Username:", username);

      // if (password.trim() !== confirmPassword.trim()) {
      //   setLoading(false);
      //   setError("Passwords do not match");
      //   return;
      // }


      const response = await fetch("http://localhost:8080/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
          email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign up failed");
      }

      const data = await response.json();
      console.log("Response from server:", data);
      console.log("Registered User Details:", data);
      navigate("/auth");
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message || "Sign up failed. Please try again.");
    }
  };

  return (
      <>
        <main className={style.registration}>
          <div className={style.container}>
            <nav className={style.nav}>
              <a href="/" className={style.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="50" height="50">
                  <path d="M10,17H7.329a2.978,2.978,0,0,1-2.122-.879L.052,10.966C.023,11.308,0,11.651,0,12A12.009,12.009,0,0,0,11,23.949V18A1,1,0,0,0,10,17Z" />
                  <path d="M20.436,3.478l-1.79,1.79A2.516,2.516,0,0,1,16.879,6H15.5a.5.5,0,0,0-.5.5v1A2.5,2.5,0,0,1,12.5,10a.5.5,0,0,0-.5.5V11a1,1,0,0,0,1,1h3a3,3,0,0,1,3,3v.962a.5.5,0,0,0,.146.353l2.625,2.626A11.949,11.949,0,0,0,20.436,3.478Z" />
                  <path d="M17,15.962V15a1,1,0,0,0-1-1H13a3,3,0,0,1-3-3v-.5A2.5,2.5,0,0,1,12.5,8a.5.5,0,0,0,.5-.5v-1A2.5,2.5,0,0,1,15.5,4h1.379a.507.507,0,0,0,.353-.146l1.661-1.661A11.974,11.974,0,0,0,.5,8.587l6.12,6.12A1,1,0,0,0,7.329,15H10a3,3,0,0,1,3,3v5.949a11.962,11.962,0,0,0,7.483-3.469l-2.751-2.751A2.516,2.516,0,0,1,17,15.962Z" />
                </svg>
              </a>

              <div className={style.sign}>
                <span>Already have an account?</span>
                <NavLink to="/auth" className={style.signIn}>
                  Sign in
                </NavLink>
              </div>
            </nav>
            <form className={style.form}>
              <h1 className={style.title}>
                Welcome to Mapped! <br /> Let’s begin the adventure
              </h1>

              {/*<div className={style.inputs1}>*/}
              {/*  <label htmlFor="email" className={style.label}>*/}
              {/*    Enter your email**/}
              {/*  </label>*/}
              {/*  <div className={style.inputWrap}>*/}
              {/*    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24">*/}
              {/*      <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />*/}
              {/*    </svg>*/}
              {/*    <input type="email" className={style.input} />*/}
              {/*  </div>*/}
              {/*</div>*/}

              <div className={style.inputs1}>
                <label htmlFor="email" className={style.label}>
                  Enter your email*
                </label>
                <div className={style.inputWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24">
                    <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                  </svg>
                  <input
                      type="email"
                      className={style.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>


              <div className={style.inputs1}>
                <label htmlFor="password" className={style.label}>
                  Create a password*
                </label>
                <div className={style.inputWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24">
                    <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                  </svg>
                  <input type="password" className={style.input} />
                </div>
              </div>

              <div className={style.inputs1}>
                <label htmlFor="confirmPassword" className={style.label}>
                  Confirm your password*
                </label>
                <div className={style.inputWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24">
                    <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                  </svg>
                  <input
                      type="password"
                      className={style.input}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className={style.inputs1}>
                <label htmlFor="username" className={style.label}>
                  Enter your username*
                </label>
                <div className={style.inputWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24">
                    <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                  </svg>
                  <input type="text" className={style.input} />
                </div>
              </div>


              <div className={style.btnWrap}>
                <button
                    id={style.btn}
                    className={style.signUp}
                    onClick={onSignUp}
                    disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </>
  );
};

export default SignUp;
