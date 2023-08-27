const AsideSteps = ({ steps }) => {
  return (
    <aside className="aside-steps-container">
      <ul>
        <li>
          <div className={steps === 0 ? "step-number selected" : "step-number"}>
            1
          </div>
          <div className="step-name">
            <span>Step 1</span>
            <span>Your Info</span>
          </div>
        </li>
        <li>
          <div className={steps === 1 ? "step-number selected" : "step-number"}>
            2
          </div>
          <div className="step-name">
            <span>Step 2</span>
            <span>Select plan</span>
          </div>
        </li>
        <li>
          <div className={steps === 2 ? "step-number selected" : "step-number"}>
            3
          </div>
          <div className="step-name">
            <span>Step 3</span>
            <span>Add-ons</span>
          </div>
        </li>
        <li>
          <div className={steps === 3 ? "step-number selected" : "step-number"}>
            4
          </div>
          <div className="step-name">
            <span>Step 4</span>
            <span>Summary</span>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default AsideSteps;
