import PropTypes from "prop-types";
import { checkPasswordStrength } from "utils";

const PasswordStrengthSection = ({ pass }) => {
  const pasStrengthRes = checkPasswordStrength(pass);
  return (
    <div style={{ display: "flex", paddingTop: 10, width: "100%" }}>
      {pasStrengthRes.map((el, index) => (
        <div
          style={{
            width: `${100 / pasStrengthRes.length}%`,
            height: 15,
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
