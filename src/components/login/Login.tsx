import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onButtonClick = () => {
        setEmailError("");
        setPasswordError("");
        setLoading(true);

        fetch("http://localhost:8080/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                console.log(data);

                // Assuming the backend returns a token on successful login
                // You might want to store this token securely, possibly using a state management library like Redux or React Context
                // For simplicity, I'm storing it in localStorage in this example
                localStorage.setItem("authToken", data.token);

                // Redirect to the dashboard or another route upon successful login
                navigate("/index");
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error:", error);

                // Handle errors, display error messages, etc.
                // For simplicity, I'm just setting a generic error message here
                setEmailError("Invalid credentials");
            });
    };

    return (
        <main className={style.main}>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>Login</div>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        value={email}
                        placeholder="Enter your email here"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={"inputBox"}
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        value={password}
                        type="password"
                        placeholder="Enter your password here"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={"inputBox"}
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={loading ? "Logging in..." : "Log in"}
                        disabled={loading}
                    />
                </div>
            </div>
        </main>
    );
};

export default Login;
