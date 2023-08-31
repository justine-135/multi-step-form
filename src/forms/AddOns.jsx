import { useState } from "react";
import { useSelector } from "react-redux";
import NextButton from "./NextButton";
import initialData from "../app/initialData";

const AddOns = ({ setSteps, steps }) => {
  const addonsSelector = useSelector((state) => state.form);

  const [data] = useState(initialData);

  const [addons, setAddons] = useState(addonsSelector.addons);

  const handleCheckBox = (selectedAddon) => {
    console.log(selectedAddon);
    if (!addons.some((addon) => addon.id === selectedAddon.id)) {
      setAddons((prevAddon) => [
        ...prevAddon,
        {
          id: selectedAddon.id,
          name: selectedAddon.name,
          description: selectedAddon.description,
          value: addonsSelector.type ? selectedAddon.mo : selectedAddon.yr,
        },
      ]);
    } else {
      setAddons((prevItems) =>
        prevItems.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };

  const handleSelectedAddon = (id) => {
    return addons.some((addon) => addon.id === id);
  };
  return (
    <section className="section-form">
      <h2 className="header-text">Pick add-ons</h2>
      <p className="info-text">Add-ons helps enhance your gaming experience.</p>
      <div className="addons-container">
        <ul>
          {data.addons ? (
            data.addons.map((addon, key) => {
              return (
                <li
                  key={addon.id}
                  className={handleSelectedAddon(addon.id) && "selected"}
                >
                  <button
                    className={handleSelectedAddon(addon.id) && "selected"}
                    onClick={() => handleCheckBox(addon)}
                  >
                    {handleSelectedAddon(addon.id) && (
                      <img src={require(`../images/${addon.img}`)} alt="" />
                    )}
                  </button>
                  <div className="addon-info">
                    <h4>{addon.name}</h4>
                    <p>{addon.description}</p>
                  </div>
                  <div className="addon-cost">
                    +$
                    {addonsSelector.type ? `${addon.mo}/mo` : `${addon.yr}/yr`}
                  </div>
                </li>
              );
            })
          ) : (
            <li>No Add-ons selected.</li>
          )}
        </ul>
      </div>
      <NextButton setSteps={setSteps} steps={steps} addons={addons} page="2" />
    </section>
  );
};

export default AddOns;
