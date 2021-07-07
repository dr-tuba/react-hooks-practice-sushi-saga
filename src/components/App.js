import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoney from "./AddMoney";
import { useState, useEffect } from 'react';

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(150)
  const [plates, setPlates] = useState([])
  const [newMoney, setNewMoney] = useState(0)

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushi(data))
  }, [])

  function addMoney(e) {
    e.preventDefault()
    setMoneyLeft(parseInt(newMoney) + parseInt(moneyLeft))
    e.target[0].value = ''
  }
  
  return (
      <div className="app">
        <SushiContainer 
          sushi = {sushi}
          setSushi = {setSushi}
          plates = {plates}
          setPlates = {setPlates}
          moneyLeft = {moneyLeft}
          setMoneyLeft = {setMoneyLeft}
        />
        <Table 
          moneyLeft = {moneyLeft}
          setMoneyLeft = {setMoneyLeft}
          plates = {plates}
        />
        <AddMoney 
          moneyLeft = {moneyLeft}
          setNewMoney = {setNewMoney}
          newMoney = {newMoney}
          addMoney = {addMoney}
        />
      </div>
    );
}

export default App;
