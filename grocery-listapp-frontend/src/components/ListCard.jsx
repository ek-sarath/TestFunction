// src/components/ListCard.js
import React from 'react';
import '../App.css';

const ListCard = ({ name, onClick, onDelete, onEdit }) => {
  return (
    <div className="card" onClick={onClick}>
      <div>
        <strong>{name}</strong>
      </div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit Name</button>
    </div>
  );
};

export default ListCard;









// // src/components/ListCard.js
// import React from 'react';

// const ListCard = ({ name, onClick, onDelete, onEdit }) => {
//   return (
//     <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', cursor: 'pointer' }}>
//       <div onClick={onClick}>
//         <strong>{name}</strong>
//       </div>
//       <button onClick={onDelete}>Delete</button>
//       <button onClick={onEdit}>Edit Name</button>
//     </div>
//   );
// };

// export default ListCard;
