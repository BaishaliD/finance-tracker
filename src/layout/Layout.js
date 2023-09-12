import "./Layout.scss";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="sidemenu-container">
        <ul>
          <a href="http://localhost:5000/dashboard">
            <li>Dashboard</li>
          </a>
          <Link to="/incomes">
            <li>Incomes</li>
          </Link>
          <Link to="/expenses">
            <li>Expenses</li>
          </Link>
        </ul>
      </div>
      <div className="body-container">{children}</div>
    </div>
  );
}
