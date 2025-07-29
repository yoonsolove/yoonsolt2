import React, { useState } from "react";

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function App() {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const handleGenerate = () => {
    const numbers = generateLottoNumbers();
    setLottoNumbers(numbers);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>윤소 로또앱 2.0</h1>
      <button onClick={handleGenerate}>번호 생성</button>
      <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
        {lottoNumbers.length > 0 && (
          <div>
            {lottoNumbers.map((num, idx) => (
              <span key={idx} style={{ margin: "0 0.5rem" }}>
                {num}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
