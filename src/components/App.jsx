import { useEffect, useState } from "react";
import { PasswordForm, PasswordStrengthSection } from "components";
import { initialState, checkPasswordStrength } from "utils";
import "./App.css";

function App() {
  const [pass, setPass] = useState("");
  const [passStrength, setPassStrength] = useState(initialState);

  useEffect(() => {
    setPassStrength(checkPasswordStrength(pass));
  }, [pass]);

  return (
    <>
      <PasswordForm setPass={setPass} />
      <PasswordStrengthSection passStrength={passStrength} />
    </>
  );
}

export default App;
