import "./styles.css";
import Greeting from "./Greeting";
import { MY_NAME, YOUR_NAME } from "./Constants";
import { createElement, useState } from "react";
import RadioG from "./RadioG";
import RadioU from "./RadioU";

export default function App() {
  // az alábbi három dolog olyan "változó"  aminek
  // a modosítása ujra rendeli a komponens érintett részeit,
  // ezek csak a hozzá tartoó "setter" functioval modosíthatóak.

  // isYOurName: változó, setIsYOurName: függvény ami változtatja
  const [isYourName, setIsYourName] = useState(false);
  const [greeting, setGreeting] = useState("hello");
  const [txt, setTxt] = useState("");

  // a függvények több szintaxisban is irhatóak:
  const handleSelecChange = ({ target: { value } }) => {
    setGreeting(value);
  };
  const handleChangeTxt = function ({ target: { value } }) {
    setTxt(value);
  };
  function handleTextareaFocus({ target }) {
    // alert("textarea focus " + target.value);
  }
  function handleTextareaBlur({ target }) {
    // alert("textarea blur " + target.value);
  }

  /*
  Az input, textarea, select elemeknek 
  lehet value paramétere,
  csak akkor modosithatja a user ha van
  onChange eseménykezelője is.
  Eseménykezelők: onClick, onFocus, onBlur, onChange -->
  */

  // A Greeting dom element két attributuma (greeting és name)
  // a hozzá tartozó react objektumban paraméterként elérhetőek
  // és kivülről is lekérdezhetőek pl. Greeting.name formában.
  //

  const [gVal, setGVal] = useState("3");

  // dinamikus radioGroup elemek
  const rgItems = [
    { value: "v1", label: "label1" },
    { value: "v2", label: "label2" }
  ];
  const [rgVal, setRgVal] = useState("v2");

  return (
    <div className="App">
      <Greeting greeting={greeting} name={isYourName ? YOUR_NAME : MY_NAME} />
      <input
        id="chk"
        type="checkbox"
        onChange={() => setIsYourName(!isYourName)}
      />
      <br />
      <input type="text" value={txt} onChange={handleChangeTxt} />
      <br />
      <textarea
        cols="20"
        rows="5"
        value={txt}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        onChange={handleChangeTxt}
      ></textarea>
      <br />
      {txt}
      <br />
      <select onChange={handleSelecChange} value={greeting}>
        <option value="Hello">Hello</option>
        <option value="Ciao">Ciao</option>
        <option value="Ahoy">Ahoy</option>
      </select>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <button
        type="button"
        onClick={() => {
          document.getElementById("chk").checked = true;
          setIsYourName(!isYourName);
          return;
        }}
      >
        set checkbox true
      </button>
      <br />
      <button type="button" onClick={() => setGreeting("Ahoy")}>
        set select Ahoy
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          Greeting.name = "Valaki";
          document.getElementById("chk").style.display = "none";
        }}
      >
        checBox hidde
      </button>
      <br />
      <p>=======================</p>
      <hr />
      <RadioG onChange={setGVal} value={gVal} />
      <p>g={gVal}</p>
      <hr />
      <RadioU
        groupName="rg"
        items={rgItems}
        onChange={setRgVal}
        value={rgVal}
      />
    </div>
  );
}
