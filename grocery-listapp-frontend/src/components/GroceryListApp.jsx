// src/GroceryListApp.js
import React, { useState } from 'react';
import ListCard from './ListCard';
import ListDetails from './ListDetails';
import AddList from './AddList';
import '../App.css';

const GroceryListApp = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([
    { id: 1, name: 'Grocery List' },
    { id: 2, name: 'Office List' },
  ]);

  const handleListClick = (list) => {
    setSelectedList(list);
  };

  const handleDeleteList = (list) => {
    setLists((prevLists) => prevLists.filter((l) => l.id !== list.id));
    setSelectedList(null);
  };

  const handleEditListName = (list) => {
    const newName = prompt('Enter new name:', list.name);
    if (newName) {
      setLists((prevLists) =>
        prevLists.map((l) => (l.id === list.id ? { ...l, name: newName } : l))
      );
    }
  };

  const handleAddList = (listName) => {
    if (listName) {
      const newList = { id: Date.now(), name: listName };
      setLists((prevLists) => [...prevLists, newList]);
    }
  };

  return (
    <div className="container">
      <h1>Grocery List App</h1>
      <div className="list-container">
        {lists.map((list) => (
          <ListCard
            key={list.id}
            name={list.name}
            onClick={() => handleListClick(list)}
            onDelete={() => handleDeleteList(list)}
            onEdit={() => handleEditListName(list)}
          />
        ))}
      </div>
      {selectedList && <ListDetails listName={selectedList.name} />}
      <AddList onAdd={handleAddList} />
    </div>
  );
};

export default GroceryListApp;






















// // src/GroceryListApp.js
// import React, { useState } from 'react';
// import ListCard from './ListCard';
// import ListDetails from './ListDetails';
// import AddList from './AddList';

// const GroceryListApp = () => {
//   const [selectedList, setSelectedList] = useState(null);
//   const [lists, setLists] = useState([
//     { id: 1, name: 'Grocery List' },
//     { id: 2, name: 'Office List' },
//   ]);

//   const handleListClick = (list) => {
//     setSelectedList(list);
//   };

//   const handleDeleteList = (list) => {
//     setLists((prevLists) => prevLists.filter((l) => l.id !== list.id));
//     setSelectedList(null);
//   };

//   const handleEditListName = (list) => {
//     const newName = prompt('Enter new name:', list.name);
//     if (newName) {
//       setLists((prevLists) =>
//         prevLists.map((l) => (l.id === list.id ? { ...l, name: newName } : l))
//       );
//     }
//   };

//   const handleAddList = (listName) => {
//     if (listName) {
//       const newList = { id: Date.now(), name: listName };
//       setLists((prevLists) => [...prevLists, newList]);
//     }
//   };

//   return (
//     <div>
//       <h1>Grocery List App</h1>
//       <div style={{ display: 'flex' }}>
//         {lists.map((list) => (
//           <ListCard
//             key={list.id}
//             name={list.name}
//             onClick={() => handleListClick(list)}
//             onDelete={() => handleDeleteList(list)}
//             onEdit={() => handleEditListName(list)}
//           />
//         ))}
//       </div>
//       {selectedList && <ListDetails listName={selectedList.name} />}
//       <AddList onAdd={handleAddList} />
//     </div>
//   );
// };

// export default GroceryListApp;

















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import GroceryList from './GroceryList';
// import DoneList from './DoneList';

// const GroceryListApp = () => {
//   const [groceries, setGroceries] = useState([]);
//   const [doneItems, setDoneItems] = useState([]);
//   const [currentItem, setCurrentItem] = useState('');
//   const [currentDescription, setCurrentDescription] = useState('');
//   const [editIndex, setEditIndex] = useState(null);
//   const [photos, setPhotos] = useState([]);

//   const saveItemToDatabase = (name, description) => {
//     const apiUrl = 'http://localhost:8085/items';
//     const data = {
//       name,
//       description,
//     };

//     axios.post(apiUrl, data)
//       .then((response) => {
//         console.log('Item saved to the database:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error saving item to the database:', error);
//       });
//   };

//   const updateItemInDatabase = (id, updatedName, updatedDescription) => {
//     const apiUrl = `http://localhost:8085/items/${id}`;
//     const data = {
//       name: updatedName,
//       description: updatedDescription,
//     };

//     axios.put(apiUrl, data)
//       .then(() => {
//         console.log(`Item with ID ${id} updated successfully.`);
//       })
//       .catch((error) => {
//         console.error(`Error updating item with ID ${id}:`, error);
//       });
//   };

//   const fetchGroceriesFromDatabase = () => {
//     const apiUrl = 'http://localhost:8085/items';

//     axios.get(apiUrl)
//       .then((response) => {
//         setGroceries(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data from the database:', error);
//       });
//   };

//   useEffect(() => {
//     fetchGroceriesFromDatabase();
//   }, [groceries]);

//   const handleAddItem = () => {
//     if (editIndex !== null) {
//       // Handle the case when editing an item
//       const editedItem = groceries[editIndex];
//       updateItemInDatabase(editedItem.id, currentItem, currentDescription);
//       setEditIndex(null);
//     } else {
//       // Handle the case when adding a new item
//       setGroceries([...groceries, { name: currentItem, description: currentDescription, photo: null }]);
//       setPhotos([...photos, null]);
//       saveItemToDatabase(currentItem, currentDescription);
//     }

//     setCurrentItem('');
//     setCurrentDescription('');
//   };


//   const UpdateItem = ({ }) => {
//   };
  

//   const handleMarkDone = (index) => {
//     const doneItem = groceries[index];
//     setDoneItems([...doneItems, doneItem]);
//     setGroceries(groceries.filter((_, i) => i !== index));
//     const updatedPhotos = [...photos];
//     updatedPhotos.splice(index, 1);
//     setPhotos(updatedPhotos);
//   };

//   const handleEdit = (index) => {
//     const itemToEdit = groceries[index];
//     setCurrentItem(itemToEdit.name);
//     setCurrentDescription(itemToEdit.description || '');
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     setGroceries(groceries.filter((_, i) => i !== index));
//     const updatedPhotos = [...photos];
//     updatedPhotos.splice(index, 1);
//     setPhotos(updatedPhotos);
//   };

//   const handlePhotoUpload = (index, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const updatedPhotos = [...photos];
//       updatedPhotos[index] = URL.createObjectURL(file);
//       setPhotos(updatedPhotos);
//     }
//   };

//   return (
//     <div>
//       <h1>Grocery List</h1>
//       <div className='Items'>
//         <input
//           className="ItemName"
//           type="text"
//           placeholder="Item Name (e.g. Atta)"
//           value={currentItem}
//           onChange={(e) => setCurrentItem(e.target.value)}
//         />
//         <input
//           className="Description"
//           type="text"
//           placeholder="Description (e.g. 1 Kg)"
//           value={currentDescription}
//           onChange={(e) => setCurrentDescription(e.target.value)}
//         />
//         <button onClick={handleAddItem} className="AddButton">
//           {editIndex !== null ? 'Update' : 'Add'}
//         </button>
//       </div>

//       <div className='container'>
//         <div className='grocery-list'>
//           <GroceryList
//             items={groceries}
//             onMarkDone={handleMarkDone}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//             onPhotoUpload={handlePhotoUpload}
//             editIndex={editIndex}
//           />
//         </div>
//         <div className='done-list'>
//           <DoneList items={doneItems} />
//         </div>
//       </div>


//       {editIndex !== null && (
//         <UpdateItem
//           id={groceries[editIndex].id}
//           onUpdate={updateItemInDatabase}
//           onCancel={() => setEditIndex(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default GroceryListApp;