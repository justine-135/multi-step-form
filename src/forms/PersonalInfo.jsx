import { useState } from "react";
import { useSelector } from "react-redux";
import NextButton from "./NextButton";

const Fields = ({ label, type, id, placeholder, value, setForm }) => {
  const handleFieldChange = (e) => {
    setForm(() => {
      return { ...value, [id]: e.target.value };
    });
  };
  return (
    <div>
      <div className="label-alert-container">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {/* {alert && <p className="field-alert">This text is required.</p>} */}
      </div>
      <input
        className={`input-text `}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value[id]}
        onChange={handleFieldChange}
      />
    </div>
  );
};

const PersonalInfo = ({ setSteps, steps }) => {
  const personalInfo = useSelector((state) => state.form.personalInfo);

  const [form, setForm] = useState({
    name: personalInfo.name,
    email: personalInfo.email,
    phone: personalInfo.phone,
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
          value={form}
          setForm={setForm}
        />
        <Fields
          label="Email"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={form}
          setForm={setForm}
        />
        <Fields
          label="Phone"
          type="text"
          id="phone"
          placeholder="e.g. + 1 234 567 890"
          value={form}
          setForm={setForm}
        />
      </form>
      <NextButton setSteps={setSteps} steps={steps} form={form} page="0" />
    </section>
  );
};

export default PersonalInfo;
