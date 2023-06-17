import PropTypes from "prop-types";

const PasswordStrengthSection = ({ passStrength }) => {
  return (
    <div style={{ display: "flex", paddingTop: 10, width: "100%" }}>
      {passStrength.map((el, index) => (
        <div
          style={{
            width: `${100 / passStrength.length}%`,
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
  passStrength: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PasswordStrengthSection;
