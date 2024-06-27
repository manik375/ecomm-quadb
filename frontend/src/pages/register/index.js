import "./register.css";
import Register from "../../components/register/RegisterForm";

// import RegisterForm from "../../components/login/RegisterForm";
import { useState } from "react";

export default function RegisterForm() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="login">
      <div className="login_wrapper">
        <Register />
      </div>
    </div>
  );
}
