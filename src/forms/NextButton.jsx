import React from "react";

const NextButton = ({ data, setAlert, setSteps, steps }) => {
  console.log(steps);
  const handleIncreaseSteps = () => {
    if (data.name === "") {
      setAlert((prevAlert) => ({
        ...prevAlert,
        name: true,
      }));
    }
    if (data.email === "") {
      setAlert((prevAlert) => ({
        ...prevAlert,
        email: true,
      }));
    }
    if (data.phone === "") {
      setAlert((prevAlert) => ({
        ...prevAlert,
        phone: true,
      }));
    }
    if (data.name !== "" && data.email !== "" && data.phone) {
      setAlert({
        name: null,
        email: null,
        phone: null,
      });
      setSteps((n) => n + 1);
    }
  };
  return (
    <div className="navigate-btn-container">
      <button className="next-btn" onClick={handleIncreaseSteps}>
        Next Step
      </button>
      {steps > 0 && (
        <button onClick={() => setSteps((n) => n - 1)}>Go back</button>
      )}
    </div>
  );
};

export default NextButton;
