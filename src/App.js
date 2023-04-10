import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "자바스크립트 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>My diary</h4>
      </div>
      <div className="list">
        <h5>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉++);
            }}
          >
            🔥
          </span>
          {따봉}
        </h5>
        <p>2월 27일 발행</p>
      </div>
      <div className="list">
        <h5>
          {글제목[1]}
          <span
            onClick={() => {
              따봉변경(따봉++);
            }}
          >
            🔥
          </span>
          {따봉}
        </h5>
        <p>2월 27일 발행</p>
      </div>
      <div className="list">
        <h5>
          {글제목[2]}
          <span
            onClick={() => {
              따봉변경(따봉++);
            }}
          >
            🔥
          </span>
          {따봉}
        </h5>
        <p>2월 27일 발행</p>
      </div>
    </div>
  );
}

export default App;
