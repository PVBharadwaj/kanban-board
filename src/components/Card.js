import React from 'react';
import './Card.css'; 

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <p className='cardp'>{ticket.id}</p>
      <h3>{ticket.title}</h3>
      <p>{ticket.tag}</p>
    </div>
  );
};

export default Card;