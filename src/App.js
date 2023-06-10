import React, { useState } from 'react'

function App(){
  const [items, setItems] = useState(["Item 1","Item 2","Item 3","Item 4","Item 5"]);
  
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
      <form onSubmit={() => {}}>
        <input type="text" onChange={() => {}} className="inputText" />
        <input type="submit" value="作成" className="submitButton" />
      </form>
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


