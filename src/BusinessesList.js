import React from 'react';
import './App.css';

export default function BusinessessList({ businesses }) {
  
  return (
    <>
  
      <div className="businesses">
        {
          businesses.map((business, i) => <div
            key={business.businesses + i}>
            <p>{business.businesses}</p>
          </div>)
        }
      </div>
    </>
  );
}
// Work From Here