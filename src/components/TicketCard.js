// components/TicketCard.js
import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>{ticket.tag.join(', ')}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>User ID: {ticket.userId}</p>
    </div>
  );
};

export default TicketCard;
