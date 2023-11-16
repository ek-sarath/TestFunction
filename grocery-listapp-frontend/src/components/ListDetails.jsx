// src/components/ListDetails.js
import React from 'react';

const ListDetails = ({ listName }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h2>{listName} List Details</h2>
      {/* Add details specific to the list here */}
    </div>
  );
};

export default ListDetails;
