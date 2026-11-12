import { useState } from 'react';

export default function Search() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    setError('');

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
          passengers: Number(passengers),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || `Search failed (${response.status})`);
      }

      const offers = Array.isArray(data)
        ? data
        : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data?.offers)
            ? data.offers
            : null;

      if (!offers) {
        throw new Error('The search response did not contain a list of offers.');
      }

      setResults(offers);
    } catch (error) {
      console.error('Error searching flights:', error);
      setError(error.message || 'Unable to search flights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTime) => {
    if (!dateTime) return 'Time unavailable';

    const parsedDate = new Date(dateTime);
    return Number.isNaN(parsedDate.getTime())
      ? dateTime
      : parsedDate.toLocaleString();
  };

  return (
    <main className="flight-search">
      <h1>Search for all flights</h1>
      <form className="flight-search__form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Departing airport, e.g., JFK"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Arriving airport, e.g., LHR"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="date"
          aria-label="Date of travel"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="date"
          aria-label="Return date (optional)"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of passengers"
          aria-label="Number of passengers"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="flight-search__error" role="alert">{error}</p>}

      {results !== null && (
        <section className="flight-results" aria-live="polite">
          <h2>{results.length ? `Found ${results.length} offers` : 'No offers found'}</h2>
          {results.map((offer, index) => {
            const firstSlice = offer.slices?.[0];
            const firstSegment = firstSlice?.segments?.[0];
            const lastSegment = firstSlice?.segments?.[firstSlice.segments.length - 1];
            const price = offer.total_amount
              ? `${offer.total_amount} ${offer.total_currency || ''}`.trim()
              : 'Price unavailable';
            const route = firstSegment
              ? `${firstSegment.origin?.iata_code || firstSegment.origin?.name || 'Unknown'} → ${
                  lastSegment?.destination?.iata_code || lastSegment?.destination?.name || 'Unknown'
                }`
              : 'Itinerary details unavailable';

            return (
              <article className="flight-result" key={offer.id || index}>
                <div className="flight-result__heading">
                  <h3>{route}</h3>
                  <strong>{price}</strong>
                </div>
                {offer.owner?.name && <p>{offer.owner.name}</p>}
                {firstSegment && (
                  <p>
                    Depart: {formatDateTime(firstSegment.departing_at)}
                    {lastSegment?.arriving_at &&
                      ` · Arrive: ${formatDateTime(lastSegment.arriving_at)}`}
                  </p>
                )}
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}