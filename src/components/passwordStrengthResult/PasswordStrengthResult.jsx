// eslint-disable-next-line react/prop-types
const PasswordStrengthResult = ({ passStrength }) => {
  return (
    <div style={{ display: "flex", paddingTop: 10, width: "100%" }}>
      {
        // eslint-disable-next-line react/prop-types
        passStrength.map((el, index) => (
          <div
            style={{
              // eslint-disable-next-line react/prop-types
              width: `${100 / passStrength.length}%`,
              height: 10,
              backgroundColor: el,
            }}
            key={index}
          ></div>
        ))
      }
    </div>
  );
};

export default PasswordStrengthResult;
