import { useState } from "react";
import NextButton from "./NextButton";

const Fields = ({
  label,
  type,
  id,
  placeholder,
  data,
  setData,
  alert,
  setAlert,
}) => {
  const handleFieldChange = (e) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
    setAlert({});
  };
  return (
    <div>
      <div className="label-alert-container">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {alert && <p className="field-alert">This text is required.</p>}
      </div>
      <input
        className="input-text"
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={data[id]}
        onChange={handleFieldChange}
      />
    </div>
  );
};

const PersonalInfo = ({ setSteps, data, setData, steps }) => {
  const [alert, setAlert] = useState({
    name: null,
    email: null,
    phone: null,
  });

  return (
    <section className="section-form">
      <h2 className="header-text">Personal Information</h2>
      <p className="info-text">
        Please provide your name, email address, and phone number.
      </p>
      <form className="form" action="">
        <Fields
          label="Name"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          data={data}
          setData={setData}
          alert={alert.name}
          setAlert={setAlert}
        />
        <Fields
          label="Email"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          data={data}
          setData={setData}
          alert={alert.email}
          setAlert={setAlert}
        />
        <Fields
          label="Phone"
          type="text"
          id="phone"
          placeholder="e.g. + 1 234 567 890"
          data={data}
          setData={setData}
          alert={alert.phone}
          setAlert={setAlert}
        />
      </form>
      <NextButton
        data={data}
        setAlert={setAlert}
        setSteps={setSteps}
        steps={steps}
      />
    </section>
  );
};

export default PersonalInfo;
