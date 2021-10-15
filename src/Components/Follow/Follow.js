import axios from "axios";
import React from "react";
import "./style.css";

function Follow({ key, suggestion, fetchSuggestions }) {
  const SERVER = process.env.SERVER;
  const addFollowing = async () => {
    try {
      await axios.post(`${SERVER}/following`, {
        _id: suggestion._id,
        userName: suggestion.userName,
      });
      fetchSuggestions();
    } catch (err) {
      console.log("Some error happened" + err);
    }
  };

  return (
    <div id={key} className="main-container">
      <div className="left-container">
        <img
          className="profile-image"
          src={`${SERVER}/ProfileImages/${suggestion.profile}`}
          alt="Profile"
        />
        <div>{suggestion.userName}</div>
      </div>
      <div>
        <button className="follow-button" onClick={addFollowing}>
          Follow
        </button>
      </div>
    </div>
  );
}

export default Follow;
