import { useState } from "react";
import AsideSteps from "./AsideSteps";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const MultiForms = ({ steps, setSteps }) => {
  switch (steps) {
    case 0:
      return <PersonalInfo setSteps={setSteps} steps={steps} />;
    case 1:
      return <Plan setSteps={setSteps} steps={steps} />;
    case 2:
      return <AddOns setSteps={setSteps} steps={steps} />;
    case 3:
      return <Summary setSteps={setSteps} steps={steps} />;

    default:
      break;
  }
};

const Form = () => {
  const [steps, setSteps] = useState(0);

  return (
    <main className="multi-step-forms-container">
      <AsideSteps steps={steps} />
      <MultiForms steps={steps} setSteps={setSteps} />
    </main>
  );
};

export default Form;
