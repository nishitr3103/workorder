import React, { useState } from "react";
import WorkorderFilters from "../components/WorkorderFilters";
import WorkorderTable from "../components/WorkorderTable";

export default function WorkorderSearch() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const url = 'http://localhost:3000/getworkorder';
    //console.log(filters)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
      });

      const parsedData = await response.json();
      //console.log('Fetched data:', parsedData);
      setResults(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className="custom-label">Work Order Search</h1>
      <div className="container">
        <div className="custom-container">
          <WorkorderFilters
            filters={filters}
            setFilters={setFilters}
            onSearch={fetchResults}
          />
        </div>

        {results.length > 0 && (
          <div className="custom-container">
            <WorkorderTable results={results} />
          </div>
        )}
      </div>
    </div>
  );
}
