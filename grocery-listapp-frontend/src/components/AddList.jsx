// src/components/AddList.js
import React, { useState } from 'react';
import '../App.css';

const AddList = ({ onAdd }) => {
  const [listName, setListName] = useState('');

  const handleAddList = () => {
    onAdd(listName);
    setListName('');
  };

  return (
    <div className="add-list">
      <h2>Add New List</h2>
      <label>List Name: </label>
      <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} />
      <button onClick={handleAddList}>Add List</button>
    </div>
  );
};

export default AddList;

















// // src/components/AddList.js
// import React, { useState } from 'react';

// const AddList = ({ onAdd }) => {
//   const [listName, setListName] = useState('');

//   const handleAddList = () => {
//     onAdd(listName);
//     setListName('');
//   };

//   return (
//     <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
//       <h2>Add New List</h2>
//       <label>List Name: </label>
//       <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} />
//       <button onClick={handleAddList}>Add List</button>
//     </div>
//   );
// };

// export default AddList;
