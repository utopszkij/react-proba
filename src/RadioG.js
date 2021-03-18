const RadioG = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="radio"
        value="1"
        checked={value === "1"}
        onChange={() => onChange("1")}
      />
      <input
        type="radio"
        value="2"
        checked={value === "2"}
        onChange={() => onChange("2")}
      />
      <input
        type="radio"
        value="3"
        checked={value === "3"}
        onChange={() => onChange("3")}
      />
    </div>
  );
};

export default RadioG;
