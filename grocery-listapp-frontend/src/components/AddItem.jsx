import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddItem = ({ onAdd, editingItem, appListId }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  useEffect(() => {
    if (editingItem) {
      setItemName(editingItem.name || '');
      setItemDescription(editingItem.description || '');
    }
  }, [editingItem]);

  const handleAddItem = async () => {
    if (itemName.trim() !== '') {
      try {
        const response = await axios.post(`http://localhost:8085/app-list/item?appListId=${appListId}`, {
          name: itemName,
          description: itemDescription,
        });

        const addedItem = response.data;
        onAdd(addedItem);
        setItemName('');
        setItemDescription('');
        console.log('Item added successfully:', addedItem);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  return (
    <div className='AddItems'>
      <input
        type="text"
        value={itemName}
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        value={itemDescription}
        placeholder="Description"
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button onClick={handleAddItem} className='AddItemButton'>
        {editingItem ? 'Update' : 'Add Item'}
      </button>
    </div>
  );
};

export default AddItem;














































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddItem = ({ onAdd, editingItem, appListId }) => {
//   const [itemName, setItemName] = useState('');
//   const [itemDescription, setItemDescription] = useState('');
//   const [savedItems, setSavedItems] = useState([]);

//   useEffect(() => {
//     if (editingItem) {
//       setItemName(editingItem.name || '');
//       setItemDescription(editingItem.description || '');
//     }
//   }, [editingItem]);

//   useEffect(() => {
//     fetchSavedItems();
//   }, [appListId]);

//   const fetchSavedItems = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8085/app-list/items?appListId=${appListId}`);
//       const items = response.data;
//       setSavedItems(items);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const handleAddItem = async () => {
//     if (itemName.trim() !== '') {
//       try {
//         const response = await axios.post(`http://localhost:8085/app-list/item?appListId=${appListId}`, {
//           name: itemName,
//           description: itemDescription,
//         });

//         const addedItem = response.data;
//         onAdd(addedItem);
//         setItemName('');
//         setItemDescription('');
//         console.log('Item added successfully:', addedItem);

      
//         fetchSavedItems();
//       } catch (error) {
//         console.error('Error adding item:', error);
//       }
//     }
//   };

//   return (
//     <div className='AddItems'>
//       {/* Render the saved items */}
//       {savedItems.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>{item.description}</p>
//         </div>
//       ))}
//       <input
//         type="text"
//         value={itemName}
//         placeholder="Item Name"
//         onChange={(e) => setItemName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={itemDescription}
//         placeholder="Description"
//         onChange={(e) => setItemDescription(e.target.value)}
//       />
//       <button onClick={handleAddItem} className='AddItemButton'>
//         {editingItem ? 'Update' : 'Add Item'}
//       </button>
//     </div>
//   );
// };

// export default AddItem;























































// import React, { useState, useEffect } from 'react';

// const AddItem = ({ onAdd, editingItem }) => {
//   const [itemName, setItemName] = useState('');
//   const [itemDescription, setItemDescription] = useState('');

//   useEffect(() => {
//     if (editingItem) {
//       setItemName(editingItem.name || '');
//       setItemDescription(editingItem.description || '');
//     }
//   }, [editingItem]);

//   const handleAddItem = () => {
//     if (itemName.trim() !== '') {
//       const newItem = { name: itemName, description: itemDescription };
//       onAdd(newItem);
//       setItemName('');
//       setItemDescription('');
//     }
//   };

//   return (
//     <div className='AddItems'>
//       <input
//         type="text"
//         value={itemName}
//         placeholder="Item Name"
//         onChange={(e) => setItemName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={itemDescription}
//         placeholder="Description"
//         onChange={(e) => setItemDescription(e.target.value)}
//       />
//       <button onClick={handleAddItem} className='AddItemButton'>
//         {editingItem ? 'Update' : 'Add Item'}
//       </button>
//     </div>
//   );
// };

// export default AddItem;