import React from 'react';
import '../App.css';

const ItemList = ({ items, onMarkDone, onEdit, onDelete }) => {
  return (
    <div className="item-list">
      <h3>Item List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            <label className="checkbox-label">
              <input type="checkbox" onChange={() => onMarkDone(index)} />
            </label>
            <span>
              {item.name} ({item.description})
            </span>
            <button onClick={() => onEdit(index)} className='EditButton'>Edit</button>
            <button onClick={() => onDelete(index)} className='DeleteButton'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;