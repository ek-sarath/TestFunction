import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';
import ListDetails from './ListDetails';
import AddList from './AddList';
import '../App.css';

const GroceryListApp = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([
    { id: 1, name: 'Grocery List' },
    { id: 2, name: 'Office List' },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8085/app-list');
      setLists(response.data);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleListClick = (list) => {
    setSelectedList(list);
  };

  const handleDeleteList = async (list) => {
    try {
      await axios.delete(`http://localhost:8085/app-list/${list.id}`);
      setLists((prevLists) => prevLists.filter((l) => l.id !== list.id));
      setSelectedList(null);
      console.log('List deleted successfully:', list);
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const handleEditListName = async (list) => {
    const newName = prompt('Enter new name:', list.name);
    if (newName) {
      try {
        await axios.put(`http://localhost:8085/app-list/${list.id}`, { name: newName });
        setLists((prevLists) =>
          prevLists.map((l) => (l.id === list.id ? { ...l, name: newName } : l))
        );
        console.log('List updated successfully:', list.id, newName);
      } catch (error) {
        console.error('Error editing list name:', error);
      }
    }
  };

  const handleAddList = async (listName) => {
    if (listName) {
      try {
        const response = await axios.post('http://localhost:8085/app-list', {
          name: listName,
        });

        const newList = { id: response.data.id, name: response.data.name };
        setLists((prevLists) => [...prevLists, newList]);

        console.log('List added successfully:', newList);
        fetchData();
      } catch (error) {
        console.error('Error adding list:', error);
      }
    }
  };

  return (
    <div className="container">
      <h1>List Manager App</h1>
      <div className="list-container">
        {lists.map((list) => (
          <CardList
            key={list.id}
            name={list.name}
            onClick={() => handleListClick(list)}
            onDelete={() => handleDeleteList(list)}
            onEdit={() => handleEditListName(list)}
          />
        ))}
        <AddList onAdd={handleAddList} />
      </div>
      {selectedList && <ListDetails listName={selectedList.name} />}
    </div>
  );
};

export default GroceryListApp;