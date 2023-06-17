import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PasswordForm = ({ setPass }) => {
  const [passValue, setPassValue] = useState("");

  useEffect(() => {
    setPass(passValue);
  }, [passValue, setPass]);

  return (
    <input
      type="text"
      value={passValue}
      autoComplete="new-password"
      onChange={(e) => setPassValue(e.currentTarget.value)}
    />
  );
};

PasswordForm.propTypes = { setPass: PropTypes.func.isRequired };

export default PasswordForm;
