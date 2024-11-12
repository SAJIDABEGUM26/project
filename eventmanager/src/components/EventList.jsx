// src/components/EventList.js
import React, { useState } from "react";

const EventList = ({ events, setSelectedEvent }) => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const filteredEvents = events
    .filter(event => event.category.includes(category) && event.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="event-list">
     <div className="eleven"> <h1>EVENTS</h1></div>
     <div className="wrapper">
     
        <input className="inputsearch"
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
       
     </div>
     <div className="category">
     <select  onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Art">Art</option>
        <option value="Event">Event</option>
      </select>
      </div>
      <div className="list">
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id} onClick={() => setSelectedEvent(event)}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.category}</p>
            <p>${event.price}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
    
  );
};

export default EventList;