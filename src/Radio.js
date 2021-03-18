import { createElement, useState } from "react";
const Radio = ({ name = "radio1" }) => {
  /**
   * value state objektum
   */
  const [value, setValue] = useState("default");
  /**
   * input elemek change eseménykezelő
   * @param {...target.value...} event
   */
  const radioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="radioGroup">
      <input
        type="radio"
        checked={value == "0"}
        onChange={radioChange}
        name={name}
        value="0"
      />
      <label>label0</label>
      <input
        type="radio"
        checked={value == "1"}
        onChange={radioChange}
        name={name}
        value="1"
      />
      <label>label1</label>
      <input
        type="radio"
        checked={value == "2"}
        onChange={radioChange}
        name={name}
        value="2"
      />
      <label>label2</label>
      <p>value:{value}</p>
      <button
        type="button"
        onClick={() => {
          setValue("2");
        }}
      >
        set label2
      </button>
    </div>
  );
};

export default Radio;
