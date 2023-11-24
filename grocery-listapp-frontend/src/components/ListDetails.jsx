import React, { useState } from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';
import DoneList from './DoneList';

const ListDetails = ({ listName, appListId }) => {
  const [lists, setLists] = useState({
    [appListId]: [],
  });
  const [doneItems, setDoneItems] = useState({
    [appListId]: [],
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddItem = (item, listId) => {
    setLists((prevLists) => {
      const updatedList = [...(prevLists[listId] || []), item];
      return { ...prevLists, [listId]: updatedList };
    });

    if (editingIndex !== null) {
      setEditingIndex(null);
    }
  };

  const handleMarkDone = (index, listId) => {
    const markedItem = lists[listId][index];
    setDoneItems((prevDoneItems) => ({
      ...prevDoneItems,
      [listId]: [...(prevDoneItems[listId] || []), markedItem],
    }));
    setLists((prevLists) => ({
      ...prevLists,
      [listId]: prevLists[listId].filter((_, i) => i !== index),
    }));
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteItem = (index, listId) => {
    setLists((prevLists) => ({
      ...prevLists,
      [listId]: prevLists[listId].filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h2>{listName}</h2>
      <AddItem
        onAdd={(item) => handleAddItem(item, appListId)}
        editingItem={editingIndex !== null ? lists[appListId][editingIndex] : null}
        appListId={appListId}
      />

      <div className='ItemDoneList'>
        <ItemList
          items={lists[appListId] || []}
          onMarkDone={(index) => handleMarkDone(index, appListId)}
          onEdit={handleEditItem}
          onDelete={(itemId) => handleDeleteItem(itemId, appListId)}
        />
        <DoneList items={doneItems[appListId] || []} />
      </div>
    </div>
  );
};

export default ListDetails;





















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddItem from './AddItem';
// import ItemList from './ItemList';
// import DoneList from './DoneList';

// const ListDetails = ({ listName, appListId, itemId }) => {
//   const [lists, setLists] = useState({
//     [appListId]: [],
//   });
//   const [doneItems, setDoneItems] = useState({
//     [appListId]: [],
//   });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
  
//   const fetchItemById = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8085/app-list/items/${itemId}?appListId=${appListId}`);
//       console.log('Item fetched successfully:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching item:', error);
//     }
//   };


//   useEffect(() => {
//     const fetchItem = async () => {
//       const item = await fetchItemById();
//       setSelectedItem(item);
//     };
//     fetchItem();
//   }, [appListId, itemId]);

//   const handleAddItem = (item, listId) => {
//     setLists((prevLists) => {
//       const updatedList = [...(prevLists[listId] || []), item];
//       return { ...prevLists, [listId]: updatedList };
//     });

//     if (editingIndex !== null) {
//       setEditingIndex(null);
//     }
//   };

//   const handleMarkDone = (index, listId) => {
//         const markedItem = lists[listId][index];
//         setDoneItems((prevDoneItems) => ({
//           ...prevDoneItems,
//           [listId]: [...(prevDoneItems[listId] || []), markedItem],
//         }));
//         setLists((prevLists) => ({
//           ...prevLists,
//           [listId]: prevLists[listId].filter((_, i) => i !== index),
//         }));
//       };
      
    
//       const handleEditItem = (index) => {
//         setEditingIndex(index);
//       };
    
//       const handleDeleteItem = (index, listId) => {
//         setLists((prevLists) => ({
//           ...prevLists,
//           [listId]: prevLists[listId].filter((_, i) => i !== index),
//         }));
//       };

//   return (
//     <div>
//       <h2>{listName}</h2>
//       <AddItem
//         onAdd={(item) => handleAddItem(item, appListId)}
//         editingItem={editingIndex !== null ? lists[appListId][editingIndex] : null}
//         appListId={appListId}
//       />

//       {selectedItem && (
//         <div>
//           <p>Name: {selectedItem.name}</p>
//           <p>Description: {selectedItem.description}</p>

//         </div>
//       )}

//       <div className='ItemDoneList'>
//       <ItemList
//           items={lists[appListId] || []}
//           onMarkDone={(index) => handleMarkDone(index, appListId)}
//           onEdit={handleEditItem}
//           onDelete={(index) => handleDeleteItem(index, appListId)}
//         />
//         <DoneList items={doneItems[appListId] || []} appListId={appListId} />
//       </div>
//     </div>
//   );
// };

// export default ListDetails;