import React from "react";

const TechniqueItem = ({ technique }) => {
  // Check if a video is run
  if (!technique) {
    return <div>Loading...</div>;
  }

  // Return the view
  return (
    <div>
       <h4>{technique.name}</h4>
    </div>
  );
};

export default TechniqueItem;