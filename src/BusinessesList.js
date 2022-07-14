import React from 'react';
import './App.css';

export default function BusinessessList({ businesses }) {
  // console.log(businesses, 'string');
  return (
    <>
      <div className="businesses">
        {
          businesses.map((business, i) => <div
            key={business.businesses + i}>
            <p>{business.name}</p>
          </div>)
        }
      </div>
    </>
  );
}
