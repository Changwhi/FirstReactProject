import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const setFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;

  })

  // const newArr = [65, 44, 66, 33];
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSetFilterHandler={setFilterHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}

        {/* {newArr}; */}

        {/* <ExpenseItem
          date={props.data[0].date}
          title={props.data[0].title}
          amount={props.data[0].amount}
        />
        <ExpenseItem
          date={props.data[1].date}
          title={props.data[1].title}
          amount={props.data[1].amount}
        />
        <ExpenseItem
          date={props.data[2].date}
          title={props.data[2].title}
          amount={props.data[2].amount}
        />
        <ExpenseItem
          date={props.data[3].date}
          title={props.data[3].title}
          amount={props.data[3].amount}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;

// line 16 - selected, you can pass a default state value to the child component.
// So, you can use this default state as a default value in child componet.

// line 8 - useState, you have to import {useState}

// line 28 - code line number 28 to 47 are hardcode. we can use map function which is Javascript function
// So, if you put some array in return, it will display each elements in an array (line number 14 and 29)
// *** if you use javascript language, you should use curly braces.(line number 29)

// example of map and how display in the html
/*
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>Multiply every element in the array with 10:</p>

<p id="demo"></p>
<p id="demo2"></p>

<script>
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;
document.getElementById("demo2").innerHTML = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
</script>

</body>
</html>
*/