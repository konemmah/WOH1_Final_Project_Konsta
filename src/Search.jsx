import React, { useState } from 'react';

export default function Search() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/search-flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin,
          destination,
          date,
          returnDate,
          passengers,
        }),
      });
    } catch (error) {
      console.error('Error searching flights:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search for all flights</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Departing airport, e.g., JFK" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
        <input type="text" placeholder="Arriving airport, e.g., LHR" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        <input type="date" placeholder="Date of travel" value={date} onChange={(e) => setDate(e.target.value)} required/>
        <input type="date" placeholder="Return date (optional)" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        <input type="number" placeholder="Number of passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} required />
        <button>Search</button>
      </form>
    </div>
  );
}