'use client'
import React, { useState, useEffect } from 'react';
import useFetchUsers from '@/hooks/usefetchUsers';
import User from '../components/user';

// add type for the FetchHook component
// dont
const FetchHook = () => {
  const [data, errorMessage, loading] = useFetchUsers();
  
  return (
    <main className="flex flex-wrap flex-col p-1 border-2">
      <h2>FetchHook</h2>
      {loading && <p>Loading...</p>}
      {errorMessage && <p data-testid="error">{ errorMessage }</p>}
      {data && data.length > 0 && <User users={data} />}
      
    </main>
  );
};

export default FetchHook;