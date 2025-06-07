import React from "react";

export default function WorkorderTable({ results }) {
  return (
    <div className="overflow-auto p-4">
      <label>Results</label>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Closure</th>
            <th className="text-left p-2">SN</th>
            <th className="text-left p-2">Workorder</th>
            <th className="text-left p-2">Address</th>
            <th className="text-left p-2">Contract</th>
            <th className="text-left p-2">PER</th>
            <th className="text-left p-2">JobCode</th>
            <th className="text-left p-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.closure}</td>
              <td className="p-2">{r.sn}</td>
              <td className="p-2">{r.workorder}</td>
              <td className="p-2">{r.address}</td>
              <td className="p-2">{r.contract}</td>
              <td className="p-2">{r.per}</td>
              <td className="p-2">{r.jobCode}</td>
              <td className="p-2">{r.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
