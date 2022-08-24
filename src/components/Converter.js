import React, { useEffect } from "react";
import { useState } from "react";
import SavedData from "./SavedData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

// Styles
import "../styles/converter.css";

export default function Converter() {
  const [value, setValue] = useState("Km");
  const [convertedTo, setConvertedTo] = useState("Miles");
  const [amount, setAmount] = useState(0);
  const [convertedUnit, setConvertedUnit] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const handleDropdownChange = (event) => {
    // Here I set the right unit as the selected one
    setValue(event.target.value);
    // Here I set the right unit as the convertedTo one
    if (event.target.value === "Km") {
      setConvertedTo("Miles");
    }
    if (event.target.value === "Miles") {
      setConvertedTo("Km");
    }
    if (event.target.value === "Ft") {
      setConvertedTo("M");
    }
    if (event.target.value === "M") {
      setConvertedTo("Ft");
    }
    if (event.target.value === "Cm") {
      setConvertedTo("Inches");
    }
    if (event.target.value === "Inches") {
      setConvertedTo("Cm");
    }
    // If the unit is changed the values are reseted
    setAmount(0);
    setConvertedUnit(0.0);
  };

  const handleInputChange = (event) => {
    // Setting the state to what the user types
    setAmount(event.target.value);
  };

  const convertUnits = () => {
    // Checking the current value and making the right math
    if (value === "Km") {
      setConvertedUnit((amount * 0.621371).toFixed(2));
    }
    if (value === "Miles") {
      setConvertedUnit((amount / 0.621371).toFixed(2));
    }
    if (value === "Ft") {
      setConvertedUnit((amount * 0.3048).toFixed(2));
    }
    if (value === "M") {
      setConvertedUnit((amount / 0.3048).toFixed(2));
    }
    if (value === "Cm") {
      setConvertedUnit((amount * 0.393701).toFixed(2));
    }
    if (value === "Inches") {
      setConvertedUnit((amount / 0.393701).toFixed(2));
    }
  };

  const switchUnits = () => {
    // Reseting results
    setAmount(convertedUnit);
    setConvertedUnit(amount);
    // After clicking the switch button changing the current unit to the opposite one: for example if km is selected after clicking Switch it will
    // be changed to miles. Also setting the convertedTo to the right unit
    if (value === "Km") {
      setValue("Miles");
      setConvertedTo("Km");
    }
    if (value === "Miles") {
      setValue("Km");
      setConvertedTo("Miles");
    }
    if (value === "Ft") {
      setValue("M");
      setConvertedTo("Ft");
    }
    if (value === "M") {
      setValue("Ft");
      setConvertedTo("M");
    }
    if (value === "Cm") {
      setValue("Inches");
      setConvertedTo("Cm");
    }
    if (value === "Inches") {
      setValue("Cm");
      setConvertedTo("Inches");
    }
  };

  const saveFavorite = () => {
    setFavorites((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1001),
        amount: amount,
        value: value,
        result: convertedUnit,
        convertedTo: convertedTo,
      },
    ]);
    setAmount(0);
    setConvertedUnit(0.0);
  };

  // Everytime the amount is changed the function to convertUnits is fired again
  useEffect(() => {
    convertUnits();
  }, [amount]);

  return (
    <div>
      <div className="container">
        <div className="subtitle">
          <h2>Convert</h2>
        </div>
        <div className="units">
          <div className="dropdown">
            <select value={value} onChange={handleDropdownChange}>
              <option value="Km">Km - Miles</option>
              <option value="Miles">Miles - Km</option>
              <option value="Ft">Ft - M</option>
              <option value="M">M - Ft</option>
              <option value="Cm">Cm - Inches</option>
              <option value="Inches">Inches - Cm</option>
            </select>
          </div>
          <div>
            <button className="switch" onClick={switchUnits}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </button>
          </div>
          <div>
            <input type="text" onChange={handleInputChange} value={amount} />
            <label>{value}</label>
          </div>
        </div>
        <div className="favAndResult">
          <div>
            <span>
              {amount > 0 && (
                <FontAwesomeIcon icon={faHeart} onClick={saveFavorite} />
              )}
            </span>
          </div>
          <div>
            <span className="result">{convertedUnit}</span>
            <span>{convertedTo}</span>
          </div>
        </div>
      </div>
      <div className="container2">
        <SavedData data={favorites} />
      </div>
    </div>
  );
}
