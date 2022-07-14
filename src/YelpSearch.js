import React from 'react';
import { useState, useEffect } from 'react';
import { getBusinesses } from './services/fetch-utils';  // Change This
import BusinessessList from './BusinessesList';

export default function YelpSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [businessQuery, setBusinessQuery] = useState('portland');
  
  async function fetchAndStoreBusinesses() {
    const data = await getBusinesses(businessQuery);  
    setBusinesses(data.businesses);
  }

  useEffect(() => {
    fetchAndStoreBusinesses();
  }, []); // eslint-disable-line
  
  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreBusinesses();
    setBusinessQuery(' ');
  }
  return (
    <>
      <form onSubmit={handleYelpSubmit} >
        <input onChange={e => setBusinessQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <BusinessessList businesses={businesses}/>
    </>
  );
}