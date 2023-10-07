// src/components/TemperatureConverter.js
import React from "react";

function TemperatureConverter({ selectedUnit, onUnitChange }) {
  return (
    <div>
      <h3>Temperature Unit Converter</h3>
      <button
        onClick={() => onUnitChange("C")}
        className={selectedUnit === "C" ? "active" : ""}
      >
        Celsius (°C)
      </button>
      <button
        onClick={() => onUnitChange("F")}
        className={selectedUnit === "F" ? "active" : ""}
      >
        Fahrenheit (°F)
      </button>
    </div>
  );
}

export default TemperatureConverter;
