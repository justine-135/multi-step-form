import NextButton from "./NextButton";

const Plan = ({ setSteps, data, setData, steps }) => {
  const handleSelectPlan = (selectedPlan) => {
    const newSelectedPlan = data.plans.map((plan) => {
      if (selectedPlan.id === plan.id) {
        return { ...plan, selected: plan.selected ? false : true };
      } else {
        return { ...plan, selected: false };
      }
    });
    setData({
      ...data,
      plans: newSelectedPlan,
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
              className={`plan-btn ${plan.selected ? "selected" : ""}`}
              key={key}
              onClick={() => {
                handleSelectPlan(plan);
              }}
            >
              <img src={require(`../images/${plan.img}`)} alt="" />
              <div className="plan-info">
                <h4>{plan.name}</h4>
                <span>
                  ${data.type === "monthly" ? plan.mo : plan.yr}/
                  {data.type === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="toggle-container">
        <span className={data.type === "monthly" ? "selected" : ""}>
          Monthly
        </span>
        <button
          onClick={() =>
            setData({
              ...data,
              type: data.type === "monthly" ? "yearly" : "monthly",
            })
          }
        >
          <div className={data.type === "monthly" ? "" : "toggle"}></div>
        </button>
        <span className={data.type !== "monthly" ? "selected" : ""}>
          Yearly
        </span>
      </div>
      <NextButton data={data} setSteps={setSteps} steps={steps} page="1" />
    </section>
  );
};

export default Plan;
