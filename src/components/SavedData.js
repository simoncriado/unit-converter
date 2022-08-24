import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Styles
import "../styles/savedData.css";

export default function SavedData({ data }) {
  const [isActive, setIsActive] = useState(false);

  // With this functionality I am trying to hide the current favorite when clicking the Xmark.
  // This is not working properly as it is deleting all favorites, not only the current one.
  // I should look for the favorite ID to delete just that one but I am not sure how to achieve that...
  // I have disabled this function for avoiding bugs
  const handleDelete = () => {
    console.log("deleting Fav");
    // setIsActive(true);
  };

  return (
    <div>
      <h4>Saved</h4>
      <div className="favorites">
        {data &&
          data.map((fav) => {
            return (
              <div
                key={fav.id}
                className={isActive ? "hiding" : "favContainer"}
              >
                <h2 className="favorite">
                  {fav.amount}
                  <span> </span>
                  {fav.value} - {fav.result} <span> </span>
                  {fav.convertedTo}
                </h2>
                <span>
                  <FontAwesomeIcon icon={faXmark} onClick={handleDelete} />
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
