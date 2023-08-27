import React from "react";

const NextButton = (props) => {
  const handleIncreaseSteps = () => {
    if (props.page == 0) {
      if (props.data.name === "") {
        props.setAlert((prevAlert) => ({
          ...prevAlert,
          name: true,
        }));
      }
      if (props.data.email === "") {
        props.setAlert((prevAlert) => ({
          ...prevAlert,
          email: true,
        }));
      }
      if (props.data.phone === "") {
        props.setAlert((prevAlert) => ({
          ...prevAlert,
          phone: true,
        }));
      }
      if (
        props.data.name !== "" &&
        props.data.email !== "" &&
        props.data.phone
      ) {
        props.setAlert({
          name: null,
          email: null,
          phone: null,
        });
        props.setSteps((n) => n + 1);
      }
    } else if (props.page == 1) {
      props.data.plans.map((plan) => {
        if (plan.selected) {
          props.setSteps((n) => n + 1);
        }
      });
    } else if (props.page == 2) {
      props.setSteps((n) => n + 1);
    } else {
      console.log("HEy");
    }
  };
  return (
    <div className="navigate-btn-container">
      {props.steps !== 3 ? (
        <button className="next-btn" onClick={handleIncreaseSteps}>
          Next Step
        </button>
      ) : (
        <button className="next-btn">Confirm</button>
      )}

      {props.steps > 0 && (
        <button onClick={() => props.setSteps((n) => n - 1)}>Go back</button>
      )}
    </div>
  );
};

export default NextButton;
