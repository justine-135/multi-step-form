import React from "react";
import { useDispatch } from "react-redux";
import { step1, step2, step3 } from "../features/form/formSlice";

const NextButton = (props) => {
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleIncreaseSteps = () => {
    if (props.page == 0) {
      props.setSteps((n) => n + 1);
      dispatch(
        step1({
          name: props.form.name,
          email: props.form.email,
          phone: props.form.phone,
        })
      );
    } else if (props.page == 1) {
      dispatch(
        step2({
          id: props.plan.id,
          name: props.plan.name,
          value: props.plan.value,
        })
      );
      props.setSteps((n) => n + 1);
    } else if (props.page == 2) {
      dispatch(step3(props.addons));
      props.setSteps((n) => n + 1);
    } else {
      console.log("No more page.");
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
