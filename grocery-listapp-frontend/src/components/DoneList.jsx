import React from 'react';
import Tick from '../assets/doneRound.svg';

const DoneList = ({ items }) => {
  return (
    <div>
      <div className='Rounder'>
      <img src={Tick} alt ='Tick Round' className='TickRound'/>
      <h3>Done List</h3></div>
      <ul className="Vblee">
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

export default DoneList;
