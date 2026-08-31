import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Merchant Login</h1>

      <p>Login to your RazorRecover account.</p>

      <Link to="/signup">Create an account</Link>
    </div>
  );
}

export default Login;