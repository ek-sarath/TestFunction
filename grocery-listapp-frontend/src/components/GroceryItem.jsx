// import React from 'react';

// const GroceryItem = ({ item, onMarkDone, onEdit, onDelete, onPhotoUpload, editMode }) => {
//   return (
//     <li className="Kblee">
//       <input
//         className="Vblee"
//         type="checkbox"
//         onChange={onMarkDone}
//       />
//       <span className="line-through">{item.name}</span>
//       {item.description && <p>({item.description})</p>}
//       {editMode ? (
//         <div>
//           <input type="file" accept="image/*" onChange={onPhotoUpload} />
//         </div>
//       ) : (
//         <>
//           <button onClick={onEdit}>Edit</button>
//           <button onClick={onDelete}>Delete</button>
//         </>
//       )}
//     </li>
//   );
// };

// export default GroceryItem;
