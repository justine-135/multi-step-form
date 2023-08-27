import { useState } from "react";
import AsideSteps from "./AsideSteps";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const MultiForms = ({ steps, setSteps, data, setData }) => {
  switch (steps) {
    case 0:
      return (
        <PersonalInfo
          setSteps={setSteps}
          data={data}
          setData={setData}
          steps={steps}
        />
      );
    case 1:
      return (
        <Plan setSteps={setSteps} data={data} setData={setData} steps={steps} />
      );
    case 2:
      return (
        <AddOns
          setSteps={setSteps}
          data={data}
          setData={setData}
          steps={steps}
        />
      );
    case 3:
      return (
        <Summary
          setSteps={setSteps}
          data={data}
          setData={setData}
          steps={steps}
        />
      );

    default:
      break;
  }
};

const Form = () => {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "monthly",
    plans: [
      {
        id: 0,
        name: "Arcade",
        img: "icon-arcade.svg",
        mo: 9,
        yr: 90,
        selected: false,
      },
      {
        id: 1,
        name: "Advanced",
        img: "icon-advanced.svg",
        mo: 12,
        yr: 120,
        selected: false,
      },
      {
        id: 2,
        name: "Pro",
        img: "icon-pro.svg",
        mo: 15,
        yr: 150,
        selected: false,
      },
    ],
    addons: [
      {
        id: 0,
        name: "Online Services",
        description: "Access to multiplayer games",
        img: "icon-checkmark.svg",
        mo: 1,
        yr: 10,
        selected: false,
      },
      {
        id: 1,
        name: "Larger Profit",
        description: "Extra 1TB of cloud save",
        img: "icon-checkmark.svg",
        mo: 2,
        yr: 20,
        selected: false,
      },
      {
        id: 2,
        name: "Customizable Profile",
        description: "Custome theme to your profile",
        img: "icon-checkmark.svg",
        mo: 2,
        yr: 20,
        selected: false,
      },
    ],
  });
  return (
    <main className="multi-step-forms-container">
      <AsideSteps steps={steps} />
      <MultiForms
        steps={steps}
        setSteps={setSteps}
        data={data}
        setData={setData}
      />
    </main>
  );
};

export default Form;
