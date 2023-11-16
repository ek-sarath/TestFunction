import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroceryList from './GroceryList';
import DoneList from './DoneList';

const GroceryListApp = () => {
  const [groceries, setGroceries] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [photos, setPhotos] = useState([]);

  const saveItemToDatabase = (name, description) => {
    const apiUrl = 'http://localhost:8085/items';
    const data = {
      name,
      description,
    };

    axios.post(apiUrl, data)
      .then((response) => {
        console.log('Item saved to the database:', response.data);
      })
      .catch((error) => {
        console.error('Error saving item to the database:', error);
      });
  };

  const updateItemInDatabase = (id, updatedName, updatedDescription) => {
    const apiUrl = `http://localhost:8085/items/${id}`;
    const data = {
      name: updatedName,
      description: updatedDescription,
    };

    axios.put(apiUrl, data)
      .then(() => {
        console.log(`Item with ID ${id} updated successfully.`);
      })
      .catch((error) => {
        console.error(`Error updating item with ID ${id}:`, error);
      });
  };

  const fetchGroceriesFromDatabase = () => {
    const apiUrl = 'http://localhost:8085/items';

    axios.get(apiUrl)
      .then((response) => {
        setGroceries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from the database:', error);
      });
  };

  useEffect(() => {
    fetchGroceriesFromDatabase();
  }, [groceries]);

  const handleAddItem = () => {
    if (editIndex !== null) {
      // Handle the case when editing an item
      const editedItem = groceries[editIndex];
      updateItemInDatabase(editedItem.id, currentItem, currentDescription);
      setEditIndex(null);
    } else {
      // Handle the case when adding a new item
      setGroceries([...groceries, { name: currentItem, description: currentDescription, photo: null }]);
      setPhotos([...photos, null]);
      saveItemToDatabase(currentItem, currentDescription);
    }

    setCurrentItem('');
    setCurrentDescription('');
  };


  const UpdateItem = ({ }) => {
  };
  

  const handleMarkDone = (index) => {
    const doneItem = groceries[index];
    setDoneItems([...doneItems, doneItem]);
    setGroceries(groceries.filter((_, i) => i !== index));
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handleEdit = (index) => {
    const itemToEdit = groceries[index];
    setCurrentItem(itemToEdit.name);
    setCurrentDescription(itemToEdit.description || '');
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setGroceries(groceries.filter((_, i) => i !== index));
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handlePhotoUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = URL.createObjectURL(file);
      setPhotos(updatedPhotos);
    }
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <div className='Items'>
        <input
          className="ItemName"
          type="text"
          placeholder="Item Name (e.g. Atta)"
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
        />
        <input
          className="Description"
          type="text"
          placeholder="Description (e.g. 1 Kg)"
          value={currentDescription}
          onChange={(e) => setCurrentDescription(e.target.value)}
        />
        <button onClick={handleAddItem} className="AddButton">
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <div className='container'>
        <div className='grocery-list'>
          <GroceryList
            items={groceries}
            onMarkDone={handleMarkDone}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPhotoUpload={handlePhotoUpload}
            editIndex={editIndex}
          />
        </div>
        <div className='done-list'>
          <DoneList items={doneItems} />
        </div>
      </div>


      {editIndex !== null && (
        <UpdateItem
          id={groceries[editIndex].id}
          onUpdate={updateItemInDatabase}
          onCancel={() => setEditIndex(null)}
        />
      )}
    </div>
  );
};

export default GroceryListApp;