import React from 'react';
import {useDrop} from 'react-dnd';

const DroppableList = ({ items, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => onDrop(item.index),
  });

  return (
    <div ref={drop} className="item-list">
      <h3>Done List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Kblee">
            <span className="line-through">{item.name}</span>
            {item.description && (
              <p>({item.description})</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DroppableList;
