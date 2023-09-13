import React, { useState, useEffect } from "react";
import {
  getIncomeListOfCurrentUser,
  getExpenseListOfCurrentUser,
} from "../../utils";
import StatsCard from "./StatsCard";
import "./Dashboard.scss";
import ExpenseIcon from "../../assets/icons/expense-rct.png";
import IncomeIcon from "../../assets/icons/money-bag.png";
import BalanceIcon from "../../assets/icons/expense-rct.png";
import DoughnutChart from "./Doughnut";
import BarChart from "./BarChart";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export default function Dashboard() {
  const [grossIncome, setGrossIncome] = useState();
  const [grossExpense, setGrossExpense] = useState();
  const [grossBalance, setGrossBalance] = useState();

  const [incomeCategoryLabels, setIncomeCategoryLabels] = useState([]);
  const [incomeCategoryData, setIncomeCategoryData] = useState([]);

  const [expenseCategoryLabels, setExpenseCategoryLabels] = useState([]);
  const [expenseCategoryData, setExpenseCategoryData] = useState([]);

  const [incomeLabels, setIncomeLabels] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  const [expenseLabels, setExpenseLabels] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const incomeList = getIncomeListOfCurrentUser();
    const expenseList = getExpenseListOfCurrentUser();

    console.log("incomeList ", incomeList);
    const totalIncome = incomeList.reduce(
      (acc, income) => acc + parseInt(income.amount),
      0
    );
    setGrossIncome(totalIncome);

    const totalExpense = expenseList.reduce(
      (acc, expense) => acc + parseInt(expense.amount),
      0
    );
    setGrossExpense(totalExpense);

    const balance = totalIncome - totalExpense;
    setGrossBalance(balance);

    incomeCategory(incomeList);
    expenseCategory(expenseList);
    dailyIncome(incomeList);
    dailyExpense(expenseList);
  }, []);

  const incomeCategory = (incomeList) => {
    const categoryMap = {};
    incomeList.forEach((expense) => {
      categoryMap[expense.source] = categoryMap[expense.source]
        ? categoryMap[expense.source] + parseInt(expense.amount)
        : parseInt(expense.amount);
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);

    setIncomeCategoryLabels(labels);
    setIncomeCategoryData(data);
  };

  const expenseCategory = (expenseList) => {
    const categoryMap = {};
    expenseList.forEach((expense) => {
      categoryMap[expense.category] = categoryMap[expense.category]
        ? categoryMap[expense.category] + parseInt(expense.amount)
        : parseInt(expense.amount);
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);

    setExpenseCategoryLabels(labels);
    setExpenseCategoryData(data);
  };

  const dailyIncome = (incomeList) => {
    const dateMap = {};
    incomeList.forEach((income) => {
      dateMap[income.date] = dateMap[income.date]
        ? dateMap[income.date] + parseInt(income.amount)
        : parseInt(income.amount);
    });

    const dateArray = Object.keys(dateMap).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const incomeArray = dateArray.map((date) => dateMap[date]);

    setIncomeLabels(dateArray);
    setIncomeData(incomeArray);
  };

  const dailyExpense = (expenseList) => {
    const dateMap = {};
    expenseList.forEach((expense) => {
      dateMap[expense.date] = dateMap[expense.date]
        ? dateMap[expense.date] + parseInt(expense.amount)
        : parseInt(expense.amount);
    });

    const dateArray = Object.keys(dateMap).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const expenseArray = dateArray.map((date) => dateMap[date]);

    setExpenseLabels(dateArray);
    setExpenseData(expenseArray);
  };

  return (
    <div>
      <div className="card-container">
        <StatsCard
          title={"Total Income"}
          value={grossIncome}
          icon={IncomeIcon}
        />
        <StatsCard
          title={"Total Expense"}
          value={grossExpense}
          icon={ExpenseIcon}
        />
        <StatsCard title={"Balance"} value={grossBalance} icon={BalanceIcon} />
      </div>

      <div className="chart-container">
        <div className="large">
          <h3>Expense Category</h3>
          <BarChart chartdata={expenseData} labels={expenseLabels} />
        </div>
        <div className="small">
          <h3>Daily Expense</h3>
          <DoughnutChart
            chartdata={expenseCategoryData}
            labels={expenseCategoryLabels}
          />
        </div>
      </div>

      <div className="chart-container">
        <div className="small">
          <h3>Income Category</h3>
          <DoughnutChart
            chartdata={incomeCategoryData}
            labels={incomeCategoryLabels}
          />
        </div>
        <div className="large">
          <h3>Daily Income</h3>
          <BarChart chartdata={incomeData} labels={incomeLabels} />
        </div>
      </div>
    </div>
  );
}
