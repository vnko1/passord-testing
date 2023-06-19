import PropTypes from "prop-types";
import { checkPasswordStrength } from "utils";

const styles = {
  container: {
    display: "flex",
    marginTop: 10,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  checker: { width: `${100 / 3}%`, height: 12 },
};

const PasswordStrengthSection = ({ pass }) => {
  const pasStrengthRes = checkPasswordStrength(pass);
  return (
    <div style={styles.container}>
      {pasStrengthRes.map((el, index) => (
        <div
          style={{
            ...styles.checker,
            backgroundColor: el,
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
};

PasswordStrengthSection.propTypes = {
  pass: PropTypes.string.isRequired,
};

export default PasswordStrengthSection;
