import React from 'react';
import {useDrag} from 'react-dnd';

const DraggableItem = ({ item, index, onMarkDone, onEdit, onDelete }) => {
  const [, drag] = useDrag({
    item: { type: 'ITEM', index },
  });

  return (
    <div ref={drag} className="item">
      <label className="checkbox-label">
        <input type="checkbox" onChange={() => onMarkDone(index)} />
      </label>
      <span>
        {item.name} ({item.description})
      </span>
      <button onClick={() => onEdit(index)} className='EditButton'>Edit</button>
      <button onClick={() => onDelete(index)} className='DeleteButton'>Delete</button>
    </div>
  );
};

export default DraggableItem;
