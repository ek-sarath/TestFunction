import React, { useState, useEffect } from 'react';
import Check from "../assets/checkList.svg";
import DeleteItem from './DeleteItemApi';

const GroceryList = ({ items, onMarkDone, onEdit, onPhotoUpload, editIndex }) => {
  const [deletedItems, setDeletedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const updatedFilteredItems = items.filter((item, index) => !deletedItems.includes(index));
    setFilteredItems(updatedFilteredItems);
  }, [deletedItems, items]);

  const handleDelete = (id) => {
    setDeletedItems([...deletedItems, id]);
  };

  return (
    <div>
      <div className='CheckListss'>
        <img src={Check} alt='check List' className='CheckList' />
        <h2>Grocery List</h2>
      </div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} className="Kblee">
            <input
              className="Vblee"
              type="checkbox"
              onChange={() => onMarkDone(index)}
            />
            <span className="line-through">{item.name}</span>
            {item.description && <p className="ItemNames">({item.description})</p>}
            {editIndex === index ? (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => onPhotoUpload(index, event)}
                />
              </div>
            ) : (
              <>
                <button className='EditButton' onClick={() => onEdit(index)}>
                  Edit
                </button>
                <DeleteItem id={item.id} onDelete={handleDelete} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;