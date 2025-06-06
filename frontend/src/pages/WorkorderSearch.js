import React, { useState } from "react";
import WorkorderFilters from "../components/WorkorderFilters";
import WorkorderTable from "../components/WorkorderTable";

const dummyResults = [
  {
    closure: "18/10/2024",
    sn: "038869402",
    workorder: "WO1260462_980758029_840938_SER_CS11167037_WO1260462-1 (R-JTR)",
    address: "LOTERIE NATIONALE KONINGLEOPOLDLAAN 13 2870 Puurs-Sint-Amands",
    contract: "46 00120.A2.R.CA TV GoSmarter",
    per: "840938",
    jobCode: "R-JTR",
    feedback: "7 / 0 / 0",
  },
];

export default function WorkorderSearch() {
  const [filters, setFilters] = useState({ workorder: "" });
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    // Simulate API fetch
    setResults(dummyResults);
  };

  return (
    <div className="p-4 grid gap-4">
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
  );
}

