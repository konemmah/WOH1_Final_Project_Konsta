function Search() {
  return (
    <div>
      <h1>Search for all flights</h1>
      <input type="Departing airport" placeholder="Departing airport, e.g., JFK" />
      <input type="Arriving airport" placeholder="Arriving airport, e.g., LHR" />
      <input type="Date" placeholder="Date of travel" />
      <button>Search</button>
    </div>
  );
}

export default Search