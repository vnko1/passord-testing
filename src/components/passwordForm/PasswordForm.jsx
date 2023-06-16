import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const PasswordForm = ({ setPass }) => {
  const [passValue, setPassValue] = useState("");

  useEffect(() => {
    setPass(passValue);
  }, [passValue, setPass]);

  return (
    <input
      type="password"
      value={passValue}
      onChange={(e) => setPassValue(e.currentTarget.value)}
    />
  );
};

export default PasswordForm;
