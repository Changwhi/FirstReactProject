import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // First method
    // const [enteredTitle, setEneteredTitle] = useState('');
    // const [enteredAmount, setAmount] = useState('');
    // const [enteredData, setData] = useState('');

    
    // const titleChangeHandler = (event) => {
    //     setEneteredTitle(event.target.value);
    //     console.log(event.target.value);
    // }; 

    // const amountChangeHandler = (event) => {
    //     setAmount(event.target.value);
    //     console.log(event.target.value);

    // };

    // const dataChangeHandler = (event) => {
    //     setData(event.target.value);
    //     console.log(event.target.value);

    // };

    // Second Method
    const [userInput, setUserInput] = useState({
        eneteredTitle: '',
        eneteredAmount: '',
        eneteredData: ''
    });

    const titleChangeHandler = (event) => {
        //Method 1
        // setUserInput({
        //     ...userInput,
        //     eneteredTitle: event.target.value,
        // });
        // If this update depends on the previous state, such as counter, you should use the method below

        //Method 2
        setUserInput((prevState) => {
            return { ...prevState, eneteredTitle: event.target.value};

        })
    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     eneteredAmount: event.target.value,
        // });

        setUserInput((preState) => {
            return {...preState, eneteredAmount: event.target.value};
        })
    }

    const dataChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     eneteredData: event.target.value,
        // });
        setUserInput((prestate)=>{
            return {...prestate, eneteredData: event.target.value};
        })

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.eneteredTitle,
            amount: userInput.eneteredAmount,
            date: new Date(userInput.eneteredData)

        };

        // Wrong because you should call the variable that contains the function.
        // props.saveExpenseData(expenseData);
        props.onSaveExpenseData(expenseData);

        // userInput.eneteredAmount = "";
        // userInput.eneteredData = "";
        // userInput.eneteredTitle = "";
        // Wrong, if you want to change the value, use second value in an array

        setUserInput({
            eneteredAmount: "",
            eneteredData: "",
            eneteredTitle: ""
        })
    };


    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='txt' value={userInput.eneteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={userInput.eneteredAmount} min="0.01" step = "0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Data</label>
                <input type='date' value={userInput.eneteredData} min= '2019-01-01' max='2022-12-31' onChange={dataChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
                <button type="submit">Click here</button>
        </div>
    </form>
);
};

export default ExpenseForm;