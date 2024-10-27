import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { createUserDocFromAuth, db, signInWithGooglePopup } from "../init-firebase";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [msg, SetMSG] = useState(<div></div>);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocFromAuth(user);
      console.log(userDocRef);
      SetMSG(<h2>Welcome, {user.displayName}</h2>);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userRef = collection(db, "User-data");

    const res = await getDocs(userRef);
    const userdata = res.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));

    let userFound = false;

    userdata.forEach((up) => {
      if (email === up.data.user["emailId"] && password === up.data.user["password"]) {
        SetMSG(<h2>Welcome, {up.data.user["firstName"]}</h2>);
        userFound = true;
      }
    });

    if (!userFound) {
      alert("Credentials do not match");
    }
  };

  const { email, password } = user;

  return (
    <div className="Login">
      <Link to="/signup">
        <button className="sign-up">Sign up</button>
      </Link>
      <div className="login-details">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email ID"
            required
          ></input>

          <label htmlFor="password">Your Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          ></input>

          <br />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <button className="Google" onClick={logGoogleUser}>
          Sign in With Google
        </button>
      </div>
      <div className="display-msg">{msg}</div>
    </div>
  );
}

export default Login;
