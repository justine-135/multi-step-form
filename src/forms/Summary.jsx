import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NextButton from "./NextButton";

const Summary = ({ setSteps, steps }) => {
  const [totalCost, setTotalCost] = useState(0);
  const summary = useSelector((state) => state.form);

  let planCost = summary.plan.value;
  let addonsCost = 0;
  summary.addons.map((addon) => {
    addonsCost += addon.value;
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
              {summary.plan.name} ({summary.type ? "Monthly" : "Yearly"})
            </h5>
            <button onClick={() => setSteps(1)}>Change</button>
          </div>
          <p>
            $
            {summary.type
              ? `${summary.plan.value}/mo`
              : `${summary.plan.value}/yr`}
          </p>
        </div>
        {summary.addons && (
          <ul className="addon-container">
            {summary.addons.map((addon, key) => {
              return (
                <li key={addon.id}>
                  <p>{addon.name}</p>
                  <p>
                    +$
                    {summary.type ? `${addon.value}/mo` : `${addon.value}/yr`}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="total-container">
        <p>Total per ({summary.type ? "month" : "year"})</p>
        <p>
          +${totalCost}/{summary.type ? "mo" : "yr"}
        </p>
      </div>
      <NextButton setSteps={setSteps} steps={steps} page="2" />
    </section>
  );
};

export default Summary;
