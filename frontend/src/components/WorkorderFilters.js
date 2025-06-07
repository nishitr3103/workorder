import React from "react";
import '../styles/workorderfilter.css';

export default function WorkorderFilters({ filters, setFilters, onSearch }) {
  
  const handleAreaChange = (e) => {
    setFilters({ ...filters, area: e.target.value });
  };
  const handleContractorChange = (e) => {
    setFilters({ ...filters, contractor: e.target.value });
  };
  const handleContractChange = (e) => {
    setFilters({ ...filters, contract: e.target.value });
  };

  return (
    <div className="workorder-filters">
      <div>
        <label>Name</label>
        <input
          type="text"
          value={filters.name || ""}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          placeholder="Enter Name"
        />
      </div>

      <div>
        <label>Workorder</label>
        <input
          type="text"
          value={filters.workorder || ""}
          onChange={(e) => setFilters({ ...filters, workorder: e.target.value })}
          placeholder="Enter Workorder"
        />
      </div>

      <div>
        <label>Contractor</label>
        <select value={filters.Contractor} onChange={handleContractorChange}>
          <option value="">-- Please select --</option>
          <option value="TV GoSmarter">TV GoSmarter</option>
          <option value="Mobile GoSmarter">Mobile GoSmarter</option>
        </select>
      </div>

      <div>
        <label>Contract</label>
        <select value={filters.Contract} onChange={handleContractChange}>
          <option value="">-- Please select --</option>
          <option value="46 00120.A2.R.CA TV GoSmarter">46 00120.A2.R.CA TV GoSmarter</option>
          <option value="100 00120.A2.R.CA TV GoSmarter">100 00120.A2.R.CA TV GoSmarter</option>
        </select>
      </div>

      <div>
        <label>Area</label>
        <select value={filters.area} onChange={handleAreaChange}>
          <option value="">-- Please select --</option>
          <option value="A2W">A2W</option>
          <option value="C3WAR">C3WAR</option>
        </select>
      </div>

      <div>
        <label>SNN</label>
        <input
          type="text"
          value={filters.snn || ""}
          onChange={(e) => setFilters({ ...filters, snn: e.target.value })}
          placeholder="Enter SNN"
        />
      </div>

      <div>
        <label>City</label>
        <input
          type="text"
          value={filters.city || ""}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          placeholder="Enter City"
        />
      </div>

      <div>
        <label>Cato Number</label>
        <input
          type="text"
          value={filters.catoNum || ""}
          onChange={(e) => setFilters({ ...filters, catoNum: e.target.value })}
          placeholder="Cato Number"
        />
      </div>

      <div>
        <label>DAM</label>
        <input
          type="text"
          value={filters.dam || ""}
          onChange={(e) => setFilters({ ...filters, dam: e.target.value })}
          placeholder="DAM"
        />
      </div>

      <div>
        <label>Job Code</label>
        <input
          type="text"
          value={filters.jobCode || ""}
          onChange={(e) => setFilters({ ...filters, jobCode: e.target.value })}
          placeholder="DAM"
        />
      </div>

      <div>
        <label>Situation</label>
        <div className="checkbox-group">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Standard</label>
          <label><input type="checkbox" /> Divergent</label>
        </div>
      </div>

      <div>
        <label>Contract Type</label>
        <div className="checkbox-group">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Cabling</label>
          <label><input type="checkbox" /> Voice&Data</label>
        </div>
      </div>

      <div>
        <label>Technology</label>
        <div className="checkbox-group">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Copper</label>
          <label><input type="checkbox" /> Fiber</label>
        </div>
      </div>

      <div>
        <label>Process</label>
        <div className="checkbox-group">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Repair</label>
          <label><input type="checkbox" /> Provisioning</label>
        </div>
      </div>

      <div className="col-span-3">
        <button className="search-button" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}
