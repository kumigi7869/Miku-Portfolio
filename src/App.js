import React, { useState } from 'react'

function App(){
  const[inputvalue,setInputValue] = useState("");
  const [items, setItems] = useState<Shuffle[]>([]);
  


  type Shuffle = {
   inputValue: String;
  };

  const shuffleItems = () => {
    const shuffledItems = [...items];
    for(let i = shuffledItems.length - 1; i > 0; i--) {
      const j =Math.floor(Math.random() * (i + 1));
      [shuffledItems[i],shuffledItems[j]] = [shuffledItems[j],shuffledItems[i]];
    }
    setItems(shuffledItems);
  };

  return (
    <div>
      <h1>ランチシャッフル!!!</h1>
      <from onSubmit={() => {}}>
        <input type="text" onChange={() => {}} className="inputText" />
        <input type="submit" value="作成" className="submitButton" />
      </from>
      <button onClick={shuffleItems}>シャッフル</button>
      <u1>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}       
      </u1>
    </div>
  );
}

export default App;


