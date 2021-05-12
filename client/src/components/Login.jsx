import { useState } from "react";
import { loginUser } from "../services/auth.js";

function Login(props) {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await loginUser(input);
    console.log(res);
    props.verify();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
