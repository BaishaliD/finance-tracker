import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import Income from "./pages/Incomes.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/incomes"
            element={
              <Layout>
                <Income />
              </Layout>
            }
          />
          <Route
            path="/expenses"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
