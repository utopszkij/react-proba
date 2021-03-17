import "./styles.css";
import Greeting from "./Greeting";
import { MY_NAME, YOUR_NAME } from "./Constants";
import { useState } from "react";

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

  return (
    <div className="App">
      <Greeting greeting={greeting} name={isYourName ? YOUR_NAME : MY_NAME} />
      <input
        id="chk"
        type="checkbox"
        onChange={() => setIsYourName(!isYourName)}
      />
      <br />
      <input type="text" id="inp1" value={txt} onChange={handleChangeTxt} />
      <br />
      <textarea
        id="txt1"
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
      <input type="radio" id="r0" name="radio" value="0" />
      radio0
      <br />
      <input type="radio" id="r1" name="radio" value="1" />
      radio1
      <br />
      <input type="radio" id="r2" name="radio" value="2" />
      radio2
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
      <button
        type="button"
        onClick={() => {
          document.querySelector("#r1").checked = "checked";
        }}
      >
        set radio 1
      </button>
    </div>
  );
}
