import React from "react";
const DataTable = (props) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr className="table-heading">
            <th className="hospital-name">NAME</th>
            <th className="email">EMAIL</th>
            <th className="city">CITY</th>
            <th className="province">PROVINCE</th>
            <th className="region">REGION</th>
            <th className="username">USERNAME</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.dataToRender.length === 0 ? (
            <tr className="empty-display">
              <td colSpan="6">NO ITEMS TO DISPLAY</td>
            </tr>
          ) : (
            props.dataToRender.map((item, index) => (
              <tr key={index} className="table-row" id={item.name}>
                <td className="hospital-name">{item.name}</td>
                <td className="email">{item.email}</td>
                <td className="city">{item.city}</td>
                <td className="province">{item.province}</td>
                <td className="region">{item.region}</td>
                <td className="username">{item.username}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
