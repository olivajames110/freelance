import React from "react";
import HomeSearch from "./components/homeSearch/homeSearch";
import GroupOfCommunities from "./components/groupOfCommunities/groupOfCommunities";

import "./middleContent.css";

const MiddleContent = () => {
  return (
    <div className="middle-content-body">
      <div className="middle-content-card">
        <HomeSearch />
        <div className="group-of-communities">
          <h1>Group of Communities</h1>
          <h3>Join a community closley related to you. </h3>
        </div>
        <GroupOfCommunities />
      </div>
    </div>
  );
};

export default MiddleContent;
