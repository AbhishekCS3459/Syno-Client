import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (user, isAuth) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigator = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("/api/signup", {
      name,
      email,
      password,
    });
    const data = await res.data;
    if (data) setIsRegistered(true);
    console.log(data);
    return data;
  };
  useEffect(() => {
    if (isRegistered) {
      navigator("/login");
    }
  }, [isRegistered]);


  return (
    <div className="flex flex-col gap-3 rounded-md shadow-md w-fit p-3 mx-auto my-[30vh]">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        className="px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
      />
      <button
        type="submit"
        onClick={handleLogin}
        className="px-3 py-2 bg-purple-500 rounded-full text-white shadow-md"
      >
        Sign up
      </button>
    </div>
  );
};

export default Signup;
