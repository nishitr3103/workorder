import React, { useState } from "react";
import WorkorderFilters from "../components/WorkorderFilters";
import WorkorderTable from "../components/WorkorderTable";
import '../styles/workorderfilter.css';

export default function WorkorderSearch() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false); // to track if search attempted

  const fetchResults = async () => {
    const url = 'http://localhost:3000/getworkorder';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
      });

      const parsedData = await response.json();
      setResults(parsedData);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearched(true);
    }
  };

  const handleGetCompleteData = () => {
    // // Open in new tab or redirect
    // window.open('/complete-data', '_blank'); // OR navigate to a new route/modal
    console.log('////////////',results)
    return(
      <div className="container">
        <div className="custom-container">
          {
            results
          }
        </div>
       </div> 
    )
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

        {/* Show results table */}
        {results.length > 0 && (
          <div className="custom-container">
            <WorkorderTable results={results} />
            <div style={{ textAlign: "right", marginTop: "10px" }}>
              <button onClick={handleGetCompleteData} className="completedata-button">
                Get Complete Data
              </button>
            </div>
          </div>
        )}

        {/* Show "No records found" if search was attempted and no results */}
        {searched && results.length === 0 && (
          <div className="custom-container">
            <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
              No records found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
