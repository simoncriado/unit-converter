import React from "react";

// Styles
import "../styles/savedData.css";

export default function SavedData({ data }) {
  return (
    <div>
      <h4>Saved</h4>
      <div className="favorites">
        {data &&
          data.map((fav) => {
            return (
              <h2 key={fav.result} className="favorite">
                {fav.amount}
                {fav.value} - {fav.result}
                {fav.convertedTo}
              </h2>
            );
          })}
      </div>
    </div>
  );
}
