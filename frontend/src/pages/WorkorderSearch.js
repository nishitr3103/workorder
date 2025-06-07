import React, { useState } from "react";
import WorkorderFilters from "../components/WorkorderFilters";
import WorkorderTable from "../components/WorkorderTable";
import WorkorderDetails from "../components/WorkorderDetails";
import '../styles/workorderfilter.css';

export default function WorkorderSearch() {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // to display complete data

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
      setShowDetails(false); // reset details on new search
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearched(true);
    }
  };

  const handleGetCompleteData = () => {
    setShowDetails(true); // Set flag to show details
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
        {results.length > 0 && !showDetails && (
          <div className="custom-container">
            <WorkorderTable results={results} />
            <div style={{ textAlign: "right", marginTop: "10px" }}>
              <button onClick={handleGetCompleteData} className="completedata-button">
                Get Complete Data
              </button>
            </div>
          </div>
        )}

        {/* Show full details if requested */}
        {showDetails && (
          <div className="custom-container">
            <WorkorderDetails results={results} />
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
