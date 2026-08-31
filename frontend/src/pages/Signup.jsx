import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <h1>Create Merchant Account</h1>

      <p>Start recovering your failed payments.</p>

      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default Signup;