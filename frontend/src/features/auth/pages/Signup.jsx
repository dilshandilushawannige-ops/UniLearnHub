import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { signupRequest } from "../../../api/authApi";

const initialForm = {
  username: "",
  email: "",
  password: "",
  currentYear: "1",
  currentSemester: "1"
};

const Signup = () => {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.email.trim().toLowerCase().endsWith("@my.sliit.lk")) {
      setError("Only SLIIT campus emails are allowed");
      return;
    }

    setSubmitting(true);

    try {
      await signupRequest({
        ...formData,
        currentYear: Number(formData.currentYear),
        currentSemester: Number(formData.currentSemester)
      });

      navigate("/login", {
        replace: true,
        state: { message: "Account created successfully. Please login." }
      });
    } catch (err) {
      const apiMessage = err.response?.data?.message;
      const firstValidationError = err.response?.data?.errors?.[0]?.message;
      setError(firstValidationError || apiMessage || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page-shell">
      <AuthForm
        title="Create your account"
        subtitle="Use your @my.sliit.lk email to register"
        fields={[
          { name: "username", label: "Username", placeholder: "Dilshan" },
          { name: "email", label: "Email", type: "email", placeholder: "itxxxxxxx@my.sliit.lk" },
          { name: "password", label: "Password", type: "password", placeholder: "At least 6 characters" },
          { name: "currentYear", label: "Current Year (1-4)", type: "number", min: 1, max: 4 },
          { name: "currentSemester", label: "Current Semester (1-2)", type: "number", min: 1, max: 2 }
        ]}
        values={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText="Signup"
        loading={submitting}
        error={error}
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-600">
              Login
            </Link>
          </>
        }
      />
    </section>
  );
};

export default Signup;
