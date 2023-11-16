import React from 'react';
import axios from 'axios';

const DeleteItem = ({ id, onDelete }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8085/items/${id}`)
      .then(() => {
        console.log(`Item with ID ${id} deleted successfully.`);
        onDelete(id);
      })
      .catch((error) => {
        console.error(`Error deleting item with ID ${id}:`, error);
      });
  };

  return (
    <button onClick={handleDelete} className="DeleteButton">
      Delete
    </button>
  );
};

export default DeleteItem;
