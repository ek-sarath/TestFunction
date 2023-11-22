import React, { useState } from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';
import DoneList from './DoneList';

const ListDetails = ({ listName }) => {
  const [items, setItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddItem = (item) => {
    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = item;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleMarkDone = (index) => {
    const markedItem = items[index];
    setDoneItems((prevDoneItems) => [...prevDoneItems, markedItem]);
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>{listName}</h2>
      <AddItem
        onAdd={handleAddItem}
        editingItem={editingIndex !== null ? items[editingIndex] : null}
      />

      <div className='ItemDoneList'>
        <ItemList
          items={items}
          onMarkDone={handleMarkDone}
          onEdit={handleEditItem}
          onDelete={handleDeleteItem}
        />
        <DoneList items={doneItems} />
      </div>
    </div>
  );
};

export default ListDetails;