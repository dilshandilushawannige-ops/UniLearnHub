import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/my-dashboard";

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login(formData);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page-shell">
      <AuthForm
        title="Login to UniLearnHub"
        subtitle="Continue with your SLIIT campus account"
        fields={[
          { name: "email", label: "Email", type: "email", placeholder: "itxxxxxxx@my.sliit.lk" },
          { name: "password", label: "Password", type: "password", placeholder: "Enter your password" }
        ]}
        values={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText="Login"
        loading={submitting}
        error={error}
        footer={
          <>
            New to UniLearnHub?{" "}
            <Link to="/signup" className="font-semibold text-brand-700 hover:text-brand-600">
              Create an account
            </Link>
          </>
        }
      />
    </section>
  );
};

export default Login;
