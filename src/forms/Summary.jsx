import NextButton from "./NextButton";
import { useEffect, useState } from "react";

const Summary = ({ setSteps, data, setData, steps }) => {
  const [totalCost, setTotalCost] = useState(0);
  const selectedPlan = data.plans.filter((plan) => plan.selected);
  const selectedAddons = data.addons.filter((addon) => addon.selected);

  let planCost =
    data.type === "monthly" ? selectedPlan[0].mo : selectedPlan[0].yr;
  let addonsCost = 0;
  selectedAddons.map((addon, key) => {
    addonsCost += data.type === "monthly" ? addon.mo : addon.yr;
  });

  useEffect(() => {
    setTotalCost(planCost + addonsCost);
  }, [steps]);

  return (
    <section className="section-form">
      <h2 className="header-text">Finishing up</h2>
      <p className="info-text">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary-container">
        <div className="plan-container">
          <div className="plan-name">
            <h5>
              {selectedPlan[0].name} ({data.type})
            </h5>
            <button onClick={() => setSteps(1)}>Change</button>
          </div>
          <p>
            $
            {data.type === "monthly"
              ? `${selectedPlan[0].mo}/mo`
              : `${selectedPlan[0].yr}/yr`}
          </p>
        </div>
        {selectedAddons && (
          <ul className="addon-container">
            {selectedAddons.map((addon, key) => {
              return (
                <li key={key}>
                  <p>{addon.name}</p>
                  <p>
                    {" "}
                    +$
                    {data.type === "monthly"
                      ? `${addon.mo}/mo`
                      : `${addon.yr}/yr`}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="total-container">
        <p>Total per ({data.type === "monthly" ? "month" : "year"})</p>
        <p>
          +${totalCost}/{data.type === "monthly" ? "mo" : "yr"}
        </p>
      </div>
      <NextButton data={data} setSteps={setSteps} steps={steps} page="2" />
    </section>
  );
};

export default Summary;
