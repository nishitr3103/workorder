import React from "react";

export default function WorkorderFilters({ filters, setFilters, onSearch }) {
  return (
    <div className="grid gap-4 grid-cols-3">
      <div>
        <label className="block text-sm font-medium">Workorder</label>
        <input
          className="border p-2 rounded w-full"
          value={filters.workorder}
          onChange={(e) => setFilters({ ...filters, workorder: e.target.value })}
          placeholder="Enter workorder"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Contractor</label>
        <select className="border p-2 rounded w-full" defaultValue="">
          <option value="">-- Please select --</option>
          <option value="contractor1">Contractor 1</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Contract</label>
        <select className="border p-2 rounded w-full" defaultValue="">
          <option value="">-- Please select --</option>
          <option value="contract1">Contract 1</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Situation</label>
        <div className="flex items-center gap-4 mt-2">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Standard</label>
          <label><input type="checkbox" /> Divergent</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Contract Type</label>
        <div className="flex items-center gap-4 mt-2">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Cabling</label>
          <label><input type="checkbox" /> Voice & Data</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Technology</label>
        <div className="flex items-center gap-4 mt-2">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" /> Copper</label>
          <label><input type="checkbox" /> Fiber</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Process</label>
        <div className="flex items-center gap-4 mt-2">
          <label><input type="checkbox" defaultChecked /> All</label>
          <label><input type="checkbox" defaultChecked /> Repair</label>
          <label><input type="checkbox" /> Provisioning</label>
        </div>
      </div>

      <div className="col-span-3">
        <button className="bg-blue-600 text-white p-2 rounded mt-4" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
