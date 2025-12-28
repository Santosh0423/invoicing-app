import axios from "../api/axios";

export default function Login() {
  const login = async () => {
    const res = await axios.post("/auth/login", {
      email: "test@test.com",
      password: "123456"
    });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
