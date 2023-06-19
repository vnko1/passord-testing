import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const styles = {
  backgroundColor: "silver",
  color: "black",
  width: 320,
  height: 30,
};

const PasswordForm = ({ setPass }) => {
  const [passValue, setPassValue] = useState("");

  useEffect(() => {
    setPass(passValue);
  }, [passValue, setPass]);

  return (
    <input
      style={styles}
      type="text"
      value={passValue}
      autoComplete="new-password"
      onChange={(e) => setPassValue(e.currentTarget.value)}
    />
  );
};

PasswordForm.propTypes = { setPass: PropTypes.func.isRequired };

export default PasswordForm;
