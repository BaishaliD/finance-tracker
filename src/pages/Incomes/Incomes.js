import { useState } from "react";
// import TxnCard from "./TxnCard";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, deleteIncome } from "../../redux/actions/incomes";
import AddIncomeForm from "./AddIncomeForm";
import NoData from "../../components/NoData";
import Incomecard from "./IncomeCard";

const INIT_FORM_DATA = {
  source: "",
  amount: 0,
  date: new Date(),
  comments: "",
};

export default function Income() {
  const incomeList = useSelector(({ income }) => income.incomeList);
  console.log("incomeList ", incomeList);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INIT_FORM_DATA);

  const handleSubmit = () => {
    const { amount, source, date, comments } = formData;
    console.log("Income added ", amount, source, date, comments);
    // if (!amount && !source && !date) {
    const data = {
      id: new Date().getTime(),
      amount,
      source,
      date,
      comments,
    };
    dispatch(addIncome(data));
    setFormData(INIT_FORM_DATA);
    // }
  };

  const handleDelete = (id) => {
    console.log("Deleting...");
    dispatch(deleteIncome(id));
  };

  return (
    <div>
      {/* <div>
        Total Income : <span>Rs. 1,40,000</span>
      </div> */}
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "30%" }}>
          <AddIncomeForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>
        <div style={{ width: "70%", padding: "0 1rem" }}>
          {incomeList?.length > 0 ? (
            incomeList.map((item) => (
              <Incomecard
                key={item.id}
                data={item}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div style={{ width: 200, margin: "auto" }}>
              <NoData message="You have not added any income yet!" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
