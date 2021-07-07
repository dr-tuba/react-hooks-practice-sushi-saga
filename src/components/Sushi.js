import React from "react";
import { useState } from 'react';

function Sushi({ name, img, price, plates, setPlates, moneyLeft, setMoneyLeft, id, sushi }) {
  const [isEaten, setIsEaten] = useState(false)
  
  const eatClickedSushi = (e) => {
    const eatenSushi = {
      name: name,
      price: price,
      id: id
    }
    if (price > moneyLeft) return alert(`You don't have enough money!`)
    setIsEaten(true)
    const sushiToChange = sushi.filter(item => item.id === id)
    sushiToChange[0].img_url = null
    sushiToChange[0].name = 'Eaten!'
    sushiToChange[0].price = 0
    setPlates([...plates, eatenSushi])
    setMoneyLeft(moneyLeft - price)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={eatClickedSushi}>
        {isEaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
       <span>{name}</span> - <span>${price}</span>
      </h4>
    </div>
  );
}

export default Sushi;
