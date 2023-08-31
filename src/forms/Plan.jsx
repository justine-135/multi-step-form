import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type, step3 } from "../features/form/formSlice";
import NextButton from "./NextButton";
import initialData from "../app/initialData";

const Plan = ({ setSteps, steps }) => {
  const dispatch = useDispatch();
  const planSelector = useSelector((state) => state.form);
  const [data] = useState(initialData);
  const [plan, setPlan] = useState({
    id: planSelector.plan.id,
    name: planSelector.plan.name,
    value: planSelector.plan.value,
  });
  const [monthly, setMonthly] = useState(planSelector.type);
  const [id, setId] = useState(plan.id);

  useEffect(() => {
    setId(plan.id);
  }, [plan]);

  const handleSelectPlan = (selectedPlan) => {
    setPlan({
      id: selectedPlan.id,
      name: selectedPlan.name,
      value: monthly ? selectedPlan.mo : selectedPlan.yr,
      type: monthly,
    });
  };

  return (
    <section className="section-form">
      <h2 className="header-text">Select your plan</h2>
      <p className="info-text">
        You have options for monthly or yearly billing.
      </p>
      <div className="plans-container">
        {data.plans.map((plan, key) => {
          return (
            <button
              className={`plan-btn ${plan.id === id ? "selected" : ""}`}
              key={key}
              onClick={() => {
                handleSelectPlan(plan);
              }}
            >
              <img src={require(`../images/${plan.img}`)} alt="" />
              <div className="plan-info">
                <h4>{plan.name}</h4>
                <span>
                  ${monthly ? plan.mo : plan.yr}/{monthly ? "mo" : "yr"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="toggle-container">
        <span className={monthly ? "selected" : ""}>Monthly</span>
        <button
          onClick={() => {
            setMonthly(!monthly);
            dispatch(type(!monthly));
            dispatch(step3([]));
            setPlan({
              id: null,
              name: "",
              value: 0,
              type: "",
            });
          }}
        >
          <div className={monthly ? "" : "toggle"}></div>
        </button>
        <span className={!monthly ? "selected" : ""}>Yearly</span>
      </div>
      <NextButton
        plan={plan}
        setSteps={setSteps}
        steps={steps}
        monthly={monthly}
        page="1"
      />
    </section>
  );
};

export default Plan;
