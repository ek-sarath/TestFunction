import React, { useState, useEffect } from 'react';

const AddItem = ({ onAdd, editingItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  useEffect(() => {
    if (editingItem) {
      setItemName(editingItem.name || '');
      setItemDescription(editingItem.description || '');
    }
  }, [editingItem]);

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      const newItem = { name: itemName, description: itemDescription };
      onAdd(newItem);
      setItemName('');
      setItemDescription('');
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