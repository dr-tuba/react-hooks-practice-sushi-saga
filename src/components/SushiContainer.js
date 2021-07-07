import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'
import { useState } from 'react';


function SushiContainer({ sushi, plates, setPlates, moneyLeft, setMoneyLeft, setSushi }) { 
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(4)
  
  const getSushi = (num1, num2) => {
    let currentSushiArray = sushi.slice(num1, num2)
    return currentSushiArray
  }

  const handleClick = (e) => {
    const newNum1 = (num1 === 96 ? 0 : num1 + 4)
    const newNum2 = (num2 === 100 ? 4 : num2 + 4)
    setNum1(newNum1)
    setNum2(newNum2)
    getSushi(num1, num2)
  }

  return (
    <div className="belt">
      {getSushi().slice(num1, num2).map(item => { return (
        <Sushi 
          key = {item.id}
          sushi = {sushi}
          setSushi = {setSushi}
          id = {item.id}
          name = {item.name}
          img = {item.img_url}
          price = {item.price}
          plates = {plates}
          setPlates = {setPlates}
          moneyLeft = {moneyLeft}
          setMoneyLeft = {setMoneyLeft}
        />
      )})}
      <MoreButton 
        handleClick = {handleClick}
      />
    </div>
  );
}

export default SushiContainer;
