import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        institute,
        contact_no,
        message,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
         <label>Institute</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Institute name..."
          onChange={(e) => setInstitute(e.target.value)}
        />
            <label>Contact No</label>
        <input
          type="Number"
          className="registerInput"
          placeholder="Enter your Contact Number..."
          onChange={(e) => setContactNo(e.target.value)}
        />
         <label>Message</label>
        <input
          type="textarea"
          className="registerInput"
          placeholder="Enter your message..."
          onChange={(e) => setMessage(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
     {/* { console.log(error)} */}
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
