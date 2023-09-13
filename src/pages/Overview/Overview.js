import React, { useEffect, useState } from "react";
import "./Overview.scss"; // Import the CSS for styling
import { formatDate } from "../../utils";

export default function Overview() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const _incomeList = localStorage.getItem("income_list")
      ? JSON.parse(localStorage.getItem("income_list"))
      : [];
    const _expenseList = localStorage.getItem("expense_list")
      ? JSON.parse(localStorage.getItem("expense_list"))
      : [];
    const incomeList = _incomeList.map((el) => {
      return { type: "Income", ...el };
    });
    const expenseList = _expenseList.map((el) => {
      return { type: "Expense", ...el };
    });
    const list = [...incomeList, ...expenseList];
    console.log(list);
    setTableData(list);

    // list.sort(())
  }, []);
  return (
    <div>
      <h2>Expense and Income Table</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.source}</td>
              <td>{item.type}</td>
              <td className="income">{item.amount}</td>
              <td>{item.category ? item.category : "-"}</td>
              <td>{formatDate(item.date)}</td>
              <td>{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
