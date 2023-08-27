import NextButton from "./NextButton";

const AddOns = ({ setSteps, data, setData, steps }) => {
  const handleCheckBox = (selectedAddon) => {
    const newSelectedAddon = data.addons.map((addon) => {
      if (selectedAddon.id === addon.id) {
        return { ...addon, selected: addon.selected ? false : true };
      } else {
        return { ...addon, selected: false };
      }
    });
    setData({
      ...data,
      addons: newSelectedAddon,
    });
  };

  return (
    <section className="section-form">
      <h2 className="header-text">Pick add-ons</h2>
      <p className="info-text">Add-ons helps enhance your gaming experience.</p>
      <div className="addons-container">
        <ul>
          {data.addons.map((addon, key) => {
            return (
              <li key={key} className={addon.selected && "selected"}>
                <button
                  className={addon.selected && "selected"}
                  onClick={() => handleCheckBox(addon)}
                >
                  {addon.selected && (
                    <img src={require(`../images/${addon.img}`)} alt="" />
                  )}
                </button>
                <div className="addon-info">
                  <h4>{addon.name}</h4>
                  <p>{addon.description}</p>
                </div>
                <div className="addon-cost">
                  +$
                  {data.type === "monthly"
                    ? `${addon.mo}/mo`
                    : `${addon.yr}/yr`}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <NextButton data={data} setSteps={setSteps} steps={steps} page="2" />
    </section>
  );
};

export default AddOns;
