import { useState } from "react";
import { PasswordForm, PasswordStrengthSection } from "components";

import "./App.css";

function App() {
  const [pass, setPass] = useState("");

  return (
    <>
      <PasswordForm setPass={setPass} />
      <PasswordStrengthSection pass={pass} />
    </>
  );
}

export default App;
