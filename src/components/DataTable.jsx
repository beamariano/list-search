import React from "react";
import { useSelector } from "react-redux";

const DataTable = () => {
  const data = useSelector((state) => state.data);
  console.log(data);
  return (
    <div className="data-table">
      <table>
        <thead className="table-heading">
          <tr>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>CITY</th>
            <th>ADDRESS</th>
            <th>USERNAME</th>
          </tr>
        </thead>
        <tbody className="data-rows">
          {/* rows of data */}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>

              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.address}</td>
              <td>{item.username.toLowerCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
