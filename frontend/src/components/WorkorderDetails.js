import React from "react";
import "../styles/workorderdetails.css";

export default function WorkorderDetails({ results }) {
  if (!results.length) return null;

  return (
    <div className="workorder-details-container">
      {results.map((r, i) => (
        <div key={i} className="workorder-card">
          <div className="workorder-header">
            <h3>{r.workorder}</h3>
          </div>
          <div className="workorder-section">
            <div><strong>Process:</strong> {r.process}</div>
            <div><strong>SN / Circuit ID:</strong> {r.snn}</div>
            <div><strong>Customer:</strong> {r.name} ({r.id})</div>
            <div><strong>Address:</strong> {r.address}</div>
            <div><strong>Lex / Work Area:</strong> {r.lex} / {r.area}</div>
            <div><strong>Zone:</strong> {r.zone}</div>
            <div><strong>Jobcode:</strong> {r.jobCode}</div>
            <div><strong>Closure Code(s):</strong> {r.feedback}</div>
            <div><strong>Contractor:</strong> {r.contractor}</div>
            <div><strong>Contract:</strong> {r.contract}</div>
            <div><strong>Closure Date:</strong> {r.closure}</div>
            <div><strong>PER:</strong> {r.per}</div>
            <div><strong>Cato Number:</strong> {r.catoNumber}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
