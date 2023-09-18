import React from "react";
import StatsCard from "./StatsCard";

const heading = {
  backgroundColor: "#dfe1f3",
  padding: "1rem",
  borderRadius: "5px",
  marginBottom: "3rem",
  fontSize: "20px",
  fontWeight: "bold",
};

const cardContainerStyles = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "1rem",
};

const buttonStyles = {
  width: "200px",
  padding: "12px",
  backgroundColor: "#dfe1f3",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  fontWeight: "bold",
  fontSize: "16px",
  color: "#5865cb",
  margin: "auto",
};

export default function Dashboard({ income, expense, balance }) {
  return (
    <div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <div style={heading}>
          <span>Dashboard</span>
        </div>
      </div>

      <div style={cardContainerStyles}>
        <StatsCard title={"Total Income"} value={income} />
        <StatsCard title={"Total Expense"} value={expense} />
        <StatsCard title={"Balance"} value={balance} />
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <a href="/insights">
          <button style={buttonStyles}>Go Back</button>
        </a>
      </div>
    </div>
  );
}
